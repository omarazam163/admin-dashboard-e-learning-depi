/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DataProvider,
  fetchUtils,
  GetOneParams,
  GetManyParams,
  GetManyReferenceParams,
  CreateParams,
  UpdateParams,
  UpdateManyParams,
  DeleteParams,
  DeleteManyParams,
} from "react-admin";

const apiURL = "https://localhost:7180/api";

const httpClient = (url: string, options: any = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' });
  }

  const token = localStorage.getItem('token');

  if (token) {
    options.headers.set('Authorization', `Bearer ${token}`);
  }

  return fetchUtils.fetchJson(url, options);
};

export const dataProvider: DataProvider = {
  getList: async (resource) => {
    const url = `${apiURL}/${resource}`;
    const { json } = await httpClient(url);

    const records = json.data ?? json;

    return {
      data: records.map((item: any) => ({
        ...item,
        id: item.id ?? item._id,
      })),
      total: json.totalCount ?? records.length,
    };
  },

  getOne: async (resource, params: GetOneParams) => {
    const url = `${apiURL}/${resource}/${params.id}`;
    const { json } = await httpClient(url);

    const record = json.data ?? json;

    return {
      data: {
        ...record,
        id: record.id ?? record._id,
      },
    };
  },

  getMany: async (resource, params: GetManyParams) => {
    const query = params.ids.map(id => `id=${id}`).join("&");
    const url = `${apiURL}/${resource}?${query}`;
    const { json } = await httpClient(url);

    const records = json.data ?? json;

    return {
      data: records.map((item: any) => ({
        ...item,
        id: item.id ?? item._id,
      })),
    };
  },

  getManyReference: async (resource, params: GetManyReferenceParams) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const query = `?${params.target}=${params.id}&_page=${page}&_limit=${perPage}&_sort=${field}&_order=${order}`;
    const url = `${apiURL}/${resource}${query}`;

    const { json, headers } = await httpClient(url);
    const total = parseInt(headers.get("X-Total-Count") || "100", 10);

    return {
      data: json,
      total,
    };
  },

  update: async (resource, params: UpdateParams) => {
    const url = `${apiURL}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "PUT",
      body: JSON.stringify(params.data),
    });

    const record = json.data ?? json;

    return {
      data: {
        ...record,
        id: record.id ?? record._id,
      },
    };
  },

  updateMany: async (resource, params: UpdateManyParams) => {
    const responses = await Promise.all(
      params.ids.map(id =>
        httpClient(`${apiURL}/${resource}/${id}`, {
          method: "PUT",
          body: JSON.stringify(params.data),
        })
      )
    );
    return { data: responses.map(res => res.json.data?.id ?? res.json.id) };
  },

  create: async (resource, params: CreateParams) => {
    const url = `${apiURL}/${resource}`;
    const { json } = await httpClient(url, {
      method: "POST",
      body: JSON.stringify(params.data),
    });

    const record = json.data ?? json;

    return {
      data: {
        ...record,
        id: record.id ?? record._id,
      },
    };
  },

  delete: async (resource, params: DeleteParams) => {
    const url = `${apiURL}/${resource}/${params.id}`;
    const { json } = await httpClient(url, {
      method: "DELETE",
    });

    const record = json.data ?? json;

    return {
      data: {
        ...record,
        id: record.id ?? record._id,
      },
    };
  },

  deleteMany: async (resource, params: DeleteManyParams) => {
    const responses = await Promise.all(
      params.ids.map(id =>
        httpClient(`${apiURL}/${resource}/${id}`, {
          method: "DELETE",
        })
      )
    );
    return { data: responses.map(res => res.json.data?.id ?? res.json.id) };
  },
};
