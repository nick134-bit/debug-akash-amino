import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptions {
  maxBodySize: number;
  readTimeout: number;
  sendTimeout: number;
  nextTries: number;
  nextTimeout: number;
  nextCases: string[];
}
export interface ServiceExposeHTTPOptionsProtoMsg {
  typeUrl: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions";
  value: Uint8Array;
}
/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptionsAmino {
  max_body_size: number;
  read_timeout: number;
  send_timeout: number;
  next_tries: number;
  next_timeout: number;
  next_cases: string[];
}
export interface ServiceExposeHTTPOptionsAminoMsg {
  type: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions";
  value: ServiceExposeHTTPOptionsAmino;
}
/** ServiceExposeHTTPOptions */
export interface ServiceExposeHTTPOptionsSDKType {
  max_body_size: number;
  read_timeout: number;
  send_timeout: number;
  next_tries: number;
  next_timeout: number;
  next_cases: string[];
}
function createBaseServiceExposeHTTPOptions(): ServiceExposeHTTPOptions {
  return {
    maxBodySize: 0,
    readTimeout: 0,
    sendTimeout: 0,
    nextTries: 0,
    nextTimeout: 0,
    nextCases: []
  };
}
export const ServiceExposeHTTPOptions = {
  typeUrl: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions",
  is(o: any): o is ServiceExposeHTTPOptions {
    return o && (o.$typeUrl === ServiceExposeHTTPOptions.typeUrl || typeof o.maxBodySize === "number" && typeof o.readTimeout === "number" && typeof o.sendTimeout === "number" && typeof o.nextTries === "number" && typeof o.nextTimeout === "number" && Array.isArray(o.nextCases) && (!o.nextCases.length || typeof o.nextCases[0] === "string"));
  },
  isSDK(o: any): o is ServiceExposeHTTPOptionsSDKType {
    return o && (o.$typeUrl === ServiceExposeHTTPOptions.typeUrl || typeof o.max_body_size === "number" && typeof o.read_timeout === "number" && typeof o.send_timeout === "number" && typeof o.next_tries === "number" && typeof o.next_timeout === "number" && Array.isArray(o.next_cases) && (!o.next_cases.length || typeof o.next_cases[0] === "string"));
  },
  isAmino(o: any): o is ServiceExposeHTTPOptionsAmino {
    return o && (o.$typeUrl === ServiceExposeHTTPOptions.typeUrl || typeof o.max_body_size === "number" && typeof o.read_timeout === "number" && typeof o.send_timeout === "number" && typeof o.next_tries === "number" && typeof o.next_timeout === "number" && Array.isArray(o.next_cases) && (!o.next_cases.length || typeof o.next_cases[0] === "string"));
  },
  encode(message: ServiceExposeHTTPOptions, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.maxBodySize !== 0) {
      writer.uint32(8).uint32(message.maxBodySize);
    }
    if (message.readTimeout !== 0) {
      writer.uint32(16).uint32(message.readTimeout);
    }
    if (message.sendTimeout !== 0) {
      writer.uint32(24).uint32(message.sendTimeout);
    }
    if (message.nextTries !== 0) {
      writer.uint32(32).uint32(message.nextTries);
    }
    if (message.nextTimeout !== 0) {
      writer.uint32(40).uint32(message.nextTimeout);
    }
    for (const v of message.nextCases) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceExposeHTTPOptions {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceExposeHTTPOptions();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.maxBodySize = reader.uint32();
          break;
        case 2:
          message.readTimeout = reader.uint32();
          break;
        case 3:
          message.sendTimeout = reader.uint32();
          break;
        case 4:
          message.nextTries = reader.uint32();
          break;
        case 5:
          message.nextTimeout = reader.uint32();
          break;
        case 6:
          message.nextCases.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceExposeHTTPOptions>): ServiceExposeHTTPOptions {
    const message = createBaseServiceExposeHTTPOptions();
    message.maxBodySize = object.maxBodySize ?? 0;
    message.readTimeout = object.readTimeout ?? 0;
    message.sendTimeout = object.sendTimeout ?? 0;
    message.nextTries = object.nextTries ?? 0;
    message.nextTimeout = object.nextTimeout ?? 0;
    message.nextCases = object.nextCases?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceExposeHTTPOptionsAmino): ServiceExposeHTTPOptions {
    const message = createBaseServiceExposeHTTPOptions();
    if (object.max_body_size !== undefined && object.max_body_size !== null) {
      message.maxBodySize = object.max_body_size;
    }
    if (object.read_timeout !== undefined && object.read_timeout !== null) {
      message.readTimeout = object.read_timeout;
    }
    if (object.send_timeout !== undefined && object.send_timeout !== null) {
      message.sendTimeout = object.send_timeout;
    }
    if (object.next_tries !== undefined && object.next_tries !== null) {
      message.nextTries = object.next_tries;
    }
    if (object.next_timeout !== undefined && object.next_timeout !== null) {
      message.nextTimeout = object.next_timeout;
    }
    message.nextCases = object.next_cases?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceExposeHTTPOptions): ServiceExposeHTTPOptionsAmino {
    const obj: any = {};
    obj.max_body_size = message.maxBodySize ?? 0;
    obj.read_timeout = message.readTimeout ?? 0;
    obj.send_timeout = message.sendTimeout ?? 0;
    obj.next_tries = message.nextTries ?? 0;
    obj.next_timeout = message.nextTimeout ?? 0;
    if (message.nextCases) {
      obj.next_cases = message.nextCases.map(e => e);
    } else {
      obj.next_cases = message.nextCases;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceExposeHTTPOptionsAminoMsg): ServiceExposeHTTPOptions {
    return ServiceExposeHTTPOptions.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceExposeHTTPOptionsProtoMsg): ServiceExposeHTTPOptions {
    return ServiceExposeHTTPOptions.decode(message.value);
  },
  toProto(message: ServiceExposeHTTPOptions): Uint8Array {
    return ServiceExposeHTTPOptions.encode(message).finish();
  },
  toProtoMsg(message: ServiceExposeHTTPOptions): ServiceExposeHTTPOptionsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta1.ServiceExposeHTTPOptions",
      value: ServiceExposeHTTPOptions.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceExposeHTTPOptions.typeUrl, ServiceExposeHTTPOptions);