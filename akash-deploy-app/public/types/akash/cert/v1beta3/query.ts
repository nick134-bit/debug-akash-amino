import { CertificateFilter, CertificateFilterAmino, CertificateFilterSDKType, Certificate, CertificateAmino, CertificateSDKType } from "./cert";
import { PageRequest, PageRequestAmino, PageRequestSDKType, PageResponse, PageResponseAmino, PageResponseSDKType } from "../../../cosmos/base/query/v1beta1/pagination";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponse {
  certificate: Certificate;
  serial: string;
}
export interface CertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta3.CertificateResponse";
  value: Uint8Array;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseAmino {
  certificate: CertificateAmino;
  serial: string;
}
export interface CertificateResponseAminoMsg {
  type: "/akash.cert.v1beta3.CertificateResponse";
  value: CertificateResponseAmino;
}
/** CertificateResponse contains a single X509 certificate and its serial number */
export interface CertificateResponseSDKType {
  certificate: CertificateSDKType;
  serial: string;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequest {
  filter: CertificateFilter;
  pagination?: PageRequest;
}
export interface QueryCertificatesRequestProtoMsg {
  typeUrl: "/akash.cert.v1beta3.QueryCertificatesRequest";
  value: Uint8Array;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestAmino {
  filter?: CertificateFilterAmino;
  pagination?: PageRequestAmino;
}
export interface QueryCertificatesRequestAminoMsg {
  type: "/akash.cert.v1beta3.QueryCertificatesRequest";
  value: QueryCertificatesRequestAmino;
}
/** QueryDeploymentsRequest is request type for the Query/Deployments RPC method */
export interface QueryCertificatesRequestSDKType {
  filter: CertificateFilterSDKType;
  pagination?: PageRequestSDKType;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponse {
  certificates: CertificateResponse[];
  pagination?: PageResponse;
}
export interface QueryCertificatesResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta3.QueryCertificatesResponse";
  value: Uint8Array;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseAmino {
  certificates?: CertificateResponseAmino[];
  pagination?: PageResponseAmino;
}
export interface QueryCertificatesResponseAminoMsg {
  type: "/akash.cert.v1beta3.QueryCertificatesResponse";
  value: QueryCertificatesResponseAmino;
}
/** QueryCertificatesResponse is response type for the Query/Certificates RPC method */
export interface QueryCertificatesResponseSDKType {
  certificates: CertificateResponseSDKType[];
  pagination?: PageResponseSDKType;
}
function createBaseCertificateResponse(): CertificateResponse {
  return {
    certificate: Certificate.fromPartial({}),
    serial: ""
  };
}
export const CertificateResponse = {
  typeUrl: "/akash.cert.v1beta3.CertificateResponse",
  is(o: any): o is CertificateResponse {
    return o && (o.$typeUrl === CertificateResponse.typeUrl || Certificate.is(o.certificate) && typeof o.serial === "string");
  },
  isSDK(o: any): o is CertificateResponseSDKType {
    return o && (o.$typeUrl === CertificateResponse.typeUrl || Certificate.isSDK(o.certificate) && typeof o.serial === "string");
  },
  isAmino(o: any): o is CertificateResponseAmino {
    return o && (o.$typeUrl === CertificateResponse.typeUrl || Certificate.isAmino(o.certificate) && typeof o.serial === "string");
  },
  encode(message: CertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certificate !== undefined) {
      Certificate.encode(message.certificate, writer.uint32(10).fork()).ldelim();
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CertificateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificate = Certificate.decode(reader, reader.uint32());
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CertificateResponse>): CertificateResponse {
    const message = createBaseCertificateResponse();
    message.certificate = object.certificate !== undefined && object.certificate !== null ? Certificate.fromPartial(object.certificate) : undefined;
    message.serial = object.serial ?? "";
    return message;
  },
  fromAmino(object: CertificateResponseAmino): CertificateResponse {
    const message = createBaseCertificateResponse();
    if (object.certificate !== undefined && object.certificate !== null) {
      message.certificate = Certificate.fromAmino(object.certificate);
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    return message;
  },
  toAmino(message: CertificateResponse): CertificateResponseAmino {
    const obj: any = {};
    obj.certificate = message.certificate ? Certificate.toAmino(message.certificate) : Certificate.toAmino(Certificate.fromPartial({}));
    obj.serial = message.serial ?? "";
    return obj;
  },
  fromAminoMsg(object: CertificateResponseAminoMsg): CertificateResponse {
    return CertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateResponseProtoMsg): CertificateResponse {
    return CertificateResponse.decode(message.value);
  },
  toProto(message: CertificateResponse): Uint8Array {
    return CertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: CertificateResponse): CertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.CertificateResponse",
      value: CertificateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CertificateResponse.typeUrl, CertificateResponse);
function createBaseQueryCertificatesRequest(): QueryCertificatesRequest {
  return {
    filter: CertificateFilter.fromPartial({}),
    pagination: undefined
  };
}
export const QueryCertificatesRequest = {
  typeUrl: "/akash.cert.v1beta3.QueryCertificatesRequest",
  is(o: any): o is QueryCertificatesRequest {
    return o && (o.$typeUrl === QueryCertificatesRequest.typeUrl || CertificateFilter.is(o.filter));
  },
  isSDK(o: any): o is QueryCertificatesRequestSDKType {
    return o && (o.$typeUrl === QueryCertificatesRequest.typeUrl || CertificateFilter.isSDK(o.filter));
  },
  isAmino(o: any): o is QueryCertificatesRequestAmino {
    return o && (o.$typeUrl === QueryCertificatesRequest.typeUrl || CertificateFilter.isAmino(o.filter));
  },
  encode(message: QueryCertificatesRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.filter !== undefined) {
      CertificateFilter.encode(message.filter, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCertificatesRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.filter = CertificateFilter.decode(reader, reader.uint32());
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCertificatesRequest>): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    message.filter = object.filter !== undefined && object.filter !== null ? CertificateFilter.fromPartial(object.filter) : undefined;
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageRequest.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCertificatesRequestAmino): QueryCertificatesRequest {
    const message = createBaseQueryCertificatesRequest();
    if (object.filter !== undefined && object.filter !== null) {
      message.filter = CertificateFilter.fromAmino(object.filter);
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCertificatesRequest): QueryCertificatesRequestAmino {
    const obj: any = {};
    obj.filter = message.filter ? CertificateFilter.toAmino(message.filter) : undefined;
    obj.pagination = message.pagination ? PageRequest.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificatesRequestAminoMsg): QueryCertificatesRequest {
    return QueryCertificatesRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertificatesRequestProtoMsg): QueryCertificatesRequest {
    return QueryCertificatesRequest.decode(message.value);
  },
  toProto(message: QueryCertificatesRequest): Uint8Array {
    return QueryCertificatesRequest.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificatesRequest): QueryCertificatesRequestProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.QueryCertificatesRequest",
      value: QueryCertificatesRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCertificatesRequest.typeUrl, QueryCertificatesRequest);
function createBaseQueryCertificatesResponse(): QueryCertificatesResponse {
  return {
    certificates: [],
    pagination: undefined
  };
}
export const QueryCertificatesResponse = {
  typeUrl: "/akash.cert.v1beta3.QueryCertificatesResponse",
  is(o: any): o is QueryCertificatesResponse {
    return o && (o.$typeUrl === QueryCertificatesResponse.typeUrl || Array.isArray(o.certificates) && (!o.certificates.length || CertificateResponse.is(o.certificates[0])));
  },
  isSDK(o: any): o is QueryCertificatesResponseSDKType {
    return o && (o.$typeUrl === QueryCertificatesResponse.typeUrl || Array.isArray(o.certificates) && (!o.certificates.length || CertificateResponse.isSDK(o.certificates[0])));
  },
  isAmino(o: any): o is QueryCertificatesResponseAmino {
    return o && (o.$typeUrl === QueryCertificatesResponse.typeUrl || Array.isArray(o.certificates) && (!o.certificates.length || CertificateResponse.isAmino(o.certificates[0])));
  },
  encode(message: QueryCertificatesResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.certificates) {
      CertificateResponse.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): QueryCertificatesResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCertificatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.certificates.push(CertificateResponse.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<QueryCertificatesResponse>): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates = object.certificates?.map(e => CertificateResponse.fromPartial(e)) || [];
    message.pagination = object.pagination !== undefined && object.pagination !== null ? PageResponse.fromPartial(object.pagination) : undefined;
    return message;
  },
  fromAmino(object: QueryCertificatesResponseAmino): QueryCertificatesResponse {
    const message = createBaseQueryCertificatesResponse();
    message.certificates = object.certificates?.map(e => CertificateResponse.fromAmino(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromAmino(object.pagination);
    }
    return message;
  },
  toAmino(message: QueryCertificatesResponse): QueryCertificatesResponseAmino {
    const obj: any = {};
    if (message.certificates) {
      obj.certificates = message.certificates.map(e => e ? CertificateResponse.toAmino(e) : undefined);
    } else {
      obj.certificates = message.certificates;
    }
    obj.pagination = message.pagination ? PageResponse.toAmino(message.pagination) : undefined;
    return obj;
  },
  fromAminoMsg(object: QueryCertificatesResponseAminoMsg): QueryCertificatesResponse {
    return QueryCertificatesResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: QueryCertificatesResponseProtoMsg): QueryCertificatesResponse {
    return QueryCertificatesResponse.decode(message.value);
  },
  toProto(message: QueryCertificatesResponse): Uint8Array {
    return QueryCertificatesResponse.encode(message).finish();
  },
  toProtoMsg(message: QueryCertificatesResponse): QueryCertificatesResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.QueryCertificatesResponse",
      value: QueryCertificatesResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(QueryCertificatesResponse.typeUrl, QueryCertificatesResponse);