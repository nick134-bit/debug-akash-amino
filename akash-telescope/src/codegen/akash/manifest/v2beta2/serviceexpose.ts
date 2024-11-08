import { ServiceExposeHTTPOptions, ServiceExposeHTTPOptionsAmino, ServiceExposeHTTPOptionsSDKType } from "./httpoptions";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** ServiceExpose stores exposed ports and hosts details */
export interface ServiceExpose {
  /** port on the container */
  port: number;
  /** port on the service definition */
  externalPort: number;
  proto: string;
  service: string;
  global: boolean;
  hosts: string[];
  httpOptions: ServiceExposeHTTPOptions;
  /** The name of the IP address associated with this, if any */
  ip: string;
  /** The sequence number of the associated endpoint in the on-chain data */
  endpointSequenceNumber: number;
}
export interface ServiceExposeProtoMsg {
  typeUrl: "/akash.manifest.v2beta2.ServiceExpose";
  value: Uint8Array;
}
/** ServiceExpose stores exposed ports and hosts details */
export interface ServiceExposeAmino {
  /** port on the container */
  port: number;
  /** port on the service definition */
  external_port: number;
  proto: string;
  service: string;
  global: boolean;
  hosts: string[];
  http_options: ServiceExposeHTTPOptionsAmino;
  /** The name of the IP address associated with this, if any */
  ip: string;
  /** The sequence number of the associated endpoint in the on-chain data */
  endpoint_sequence_number: number;
}
export interface ServiceExposeAminoMsg {
  type: "/akash.manifest.v2beta2.ServiceExpose";
  value: ServiceExposeAmino;
}
/** ServiceExpose stores exposed ports and hosts details */
export interface ServiceExposeSDKType {
  port: number;
  external_port: number;
  proto: string;
  service: string;
  global: boolean;
  hosts: string[];
  http_options: ServiceExposeHTTPOptionsSDKType;
  ip: string;
  endpoint_sequence_number: number;
}
function createBaseServiceExpose(): ServiceExpose {
  return {
    port: 0,
    externalPort: 0,
    proto: "",
    service: "",
    global: false,
    hosts: [],
    httpOptions: ServiceExposeHTTPOptions.fromPartial({}),
    ip: "",
    endpointSequenceNumber: 0
  };
}
export const ServiceExpose = {
  typeUrl: "/akash.manifest.v2beta2.ServiceExpose",
  is(o: any): o is ServiceExpose {
    return o && (o.$typeUrl === ServiceExpose.typeUrl || typeof o.port === "number" && typeof o.externalPort === "number" && typeof o.proto === "string" && typeof o.service === "string" && typeof o.global === "boolean" && Array.isArray(o.hosts) && (!o.hosts.length || typeof o.hosts[0] === "string") && ServiceExposeHTTPOptions.is(o.httpOptions) && typeof o.ip === "string" && typeof o.endpointSequenceNumber === "number");
  },
  isSDK(o: any): o is ServiceExposeSDKType {
    return o && (o.$typeUrl === ServiceExpose.typeUrl || typeof o.port === "number" && typeof o.external_port === "number" && typeof o.proto === "string" && typeof o.service === "string" && typeof o.global === "boolean" && Array.isArray(o.hosts) && (!o.hosts.length || typeof o.hosts[0] === "string") && ServiceExposeHTTPOptions.isSDK(o.http_options) && typeof o.ip === "string" && typeof o.endpoint_sequence_number === "number");
  },
  isAmino(o: any): o is ServiceExposeAmino {
    return o && (o.$typeUrl === ServiceExpose.typeUrl || typeof o.port === "number" && typeof o.external_port === "number" && typeof o.proto === "string" && typeof o.service === "string" && typeof o.global === "boolean" && Array.isArray(o.hosts) && (!o.hosts.length || typeof o.hosts[0] === "string") && ServiceExposeHTTPOptions.isAmino(o.http_options) && typeof o.ip === "string" && typeof o.endpoint_sequence_number === "number");
  },
  encode(message: ServiceExpose, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port !== 0) {
      writer.uint32(8).uint32(message.port);
    }
    if (message.externalPort !== 0) {
      writer.uint32(16).uint32(message.externalPort);
    }
    if (message.proto !== "") {
      writer.uint32(26).string(message.proto);
    }
    if (message.service !== "") {
      writer.uint32(34).string(message.service);
    }
    if (message.global === true) {
      writer.uint32(40).bool(message.global);
    }
    for (const v of message.hosts) {
      writer.uint32(50).string(v!);
    }
    if (message.httpOptions !== undefined) {
      ServiceExposeHTTPOptions.encode(message.httpOptions, writer.uint32(58).fork()).ldelim();
    }
    if (message.ip !== "") {
      writer.uint32(66).string(message.ip);
    }
    if (message.endpointSequenceNumber !== 0) {
      writer.uint32(72).uint32(message.endpointSequenceNumber);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceExpose {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceExpose();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = reader.uint32();
          break;
        case 2:
          message.externalPort = reader.uint32();
          break;
        case 3:
          message.proto = reader.string();
          break;
        case 4:
          message.service = reader.string();
          break;
        case 5:
          message.global = reader.bool();
          break;
        case 6:
          message.hosts.push(reader.string());
          break;
        case 7:
          message.httpOptions = ServiceExposeHTTPOptions.decode(reader, reader.uint32());
          break;
        case 8:
          message.ip = reader.string();
          break;
        case 9:
          message.endpointSequenceNumber = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceExpose>): ServiceExpose {
    const message = createBaseServiceExpose();
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.proto = object.proto ?? "";
    message.service = object.service ?? "";
    message.global = object.global ?? false;
    message.hosts = object.hosts?.map(e => e) || [];
    message.httpOptions = object.httpOptions !== undefined && object.httpOptions !== null ? ServiceExposeHTTPOptions.fromPartial(object.httpOptions) : undefined;
    message.ip = object.ip ?? "";
    message.endpointSequenceNumber = object.endpointSequenceNumber ?? 0;
    return message;
  },
  fromAmino(object: ServiceExposeAmino): ServiceExpose {
    const message = createBaseServiceExpose();
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.external_port !== undefined && object.external_port !== null) {
      message.externalPort = object.external_port;
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    }
    if (object.service !== undefined && object.service !== null) {
      message.service = object.service;
    }
    if (object.global !== undefined && object.global !== null) {
      message.global = object.global;
    }
    message.hosts = object.hosts?.map(e => e) || [];
    if (object.http_options !== undefined && object.http_options !== null) {
      message.httpOptions = ServiceExposeHTTPOptions.fromAmino(object.http_options);
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    }
    if (object.endpoint_sequence_number !== undefined && object.endpoint_sequence_number !== null) {
      message.endpointSequenceNumber = object.endpoint_sequence_number;
    }
    return message;
  },
  toAmino(message: ServiceExpose): ServiceExposeAmino {
    const obj: any = {};
    obj.port = message.port ?? 0;
    obj.external_port = message.externalPort ?? 0;
    obj.proto = message.proto ?? "";
    obj.service = message.service ?? "";
    obj.global = message.global ?? false;
    if (message.hosts) {
      obj.hosts = message.hosts.map(e => e);
    } else {
      obj.hosts = message.hosts;
    }
    obj.http_options = message.httpOptions ? ServiceExposeHTTPOptions.toAmino(message.httpOptions) : ServiceExposeHTTPOptions.toAmino(ServiceExposeHTTPOptions.fromPartial({}));
    obj.ip = message.ip ?? "";
    obj.endpoint_sequence_number = message.endpointSequenceNumber ?? 0;
    return obj;
  },
  fromAminoMsg(object: ServiceExposeAminoMsg): ServiceExpose {
    return ServiceExpose.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceExposeProtoMsg): ServiceExpose {
    return ServiceExpose.decode(message.value);
  },
  toProto(message: ServiceExpose): Uint8Array {
    return ServiceExpose.encode(message).finish();
  },
  toProtoMsg(message: ServiceExpose): ServiceExposeProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta2.ServiceExpose",
      value: ServiceExpose.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceExpose.typeUrl, ServiceExpose);