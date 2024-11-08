import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { ServiceExpose, ServiceExposeAmino, ServiceExposeSDKType } from "./serviceexpose";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** StorageParams */
export interface StorageParams {
  name: string;
  mount: string;
  readOnly: boolean;
}
export interface StorageParamsProtoMsg {
  typeUrl: "/akash.manifest.v2beta1.StorageParams";
  value: Uint8Array;
}
/** StorageParams */
export interface StorageParamsAmino {
  name: string;
  mount: string;
  read_only: boolean;
}
export interface StorageParamsAminoMsg {
  type: "/akash.manifest.v2beta1.StorageParams";
  value: StorageParamsAmino;
}
/** StorageParams */
export interface StorageParamsSDKType {
  name: string;
  mount: string;
  read_only: boolean;
}
/** ServiceParams */
export interface ServiceParams {
  storage: StorageParams[];
}
export interface ServiceParamsProtoMsg {
  typeUrl: "/akash.manifest.v2beta1.ServiceParams";
  value: Uint8Array;
}
/** ServiceParams */
export interface ServiceParamsAmino {
  storage: StorageParamsAmino[];
}
export interface ServiceParamsAminoMsg {
  type: "/akash.manifest.v2beta1.ServiceParams";
  value: ServiceParamsAmino;
}
/** ServiceParams */
export interface ServiceParamsSDKType {
  storage: StorageParamsSDKType[];
}
/** Service stores name, image, args, env, unit, count and expose list of service */
export interface Service {
  name: string;
  image: string;
  command: string[];
  args: string[];
  env?: string[];
  resources: ResourceUnits;
  count: number;
  expose: ServiceExpose[];
  params?: ServiceParams;
}
export interface ServiceProtoMsg {
  typeUrl: "/akash.manifest.v2beta1.Service";
  value: Uint8Array;
}
/** Service stores name, image, args, env, unit, count and expose list of service */
export interface ServiceAmino {
  name: string;
  image: string;
  command: string[];
  args: string[];
  env: string[];
  resources: ResourceUnitsAmino;
  count: number;
  expose: ServiceExposeAmino[];
  params: ServiceParamsAmino;
}
export interface ServiceAminoMsg {
  type: "/akash.manifest.v2beta1.Service";
  value: ServiceAmino;
}
/** Service stores name, image, args, env, unit, count and expose list of service */
export interface ServiceSDKType {
  name: string;
  image: string;
  command: string[];
  args: string[];
  env?: string[];
  resources: ResourceUnitsSDKType;
  count: number;
  expose: ServiceExposeSDKType[];
  params?: ServiceParamsSDKType;
}
function createBaseStorageParams(): StorageParams {
  return {
    name: "",
    mount: "",
    readOnly: false
  };
}
export const StorageParams = {
  typeUrl: "/akash.manifest.v2beta1.StorageParams",
  is(o: any): o is StorageParams {
    return o && (o.$typeUrl === StorageParams.typeUrl || typeof o.name === "string" && typeof o.mount === "string" && typeof o.readOnly === "boolean");
  },
  isSDK(o: any): o is StorageParamsSDKType {
    return o && (o.$typeUrl === StorageParams.typeUrl || typeof o.name === "string" && typeof o.mount === "string" && typeof o.read_only === "boolean");
  },
  isAmino(o: any): o is StorageParamsAmino {
    return o && (o.$typeUrl === StorageParams.typeUrl || typeof o.name === "string" && typeof o.mount === "string" && typeof o.read_only === "boolean");
  },
  encode(message: StorageParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.mount !== "") {
      writer.uint32(18).string(message.mount);
    }
    if (message.readOnly === true) {
      writer.uint32(24).bool(message.readOnly);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.mount = reader.string();
          break;
        case 3:
          message.readOnly = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StorageParams>): StorageParams {
    const message = createBaseStorageParams();
    message.name = object.name ?? "";
    message.mount = object.mount ?? "";
    message.readOnly = object.readOnly ?? false;
    return message;
  },
  fromAmino(object: StorageParamsAmino): StorageParams {
    const message = createBaseStorageParams();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.mount !== undefined && object.mount !== null) {
      message.mount = object.mount;
    }
    if (object.read_only !== undefined && object.read_only !== null) {
      message.readOnly = object.read_only;
    }
    return message;
  },
  toAmino(message: StorageParams): StorageParamsAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.mount = message.mount ?? "";
    obj.read_only = message.readOnly ?? false;
    return obj;
  },
  fromAminoMsg(object: StorageParamsAminoMsg): StorageParams {
    return StorageParams.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageParamsProtoMsg): StorageParams {
    return StorageParams.decode(message.value);
  },
  toProto(message: StorageParams): Uint8Array {
    return StorageParams.encode(message).finish();
  },
  toProtoMsg(message: StorageParams): StorageParamsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta1.StorageParams",
      value: StorageParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StorageParams.typeUrl, StorageParams);
function createBaseServiceParams(): ServiceParams {
  return {
    storage: []
  };
}
export const ServiceParams = {
  typeUrl: "/akash.manifest.v2beta1.ServiceParams",
  is(o: any): o is ServiceParams {
    return o && (o.$typeUrl === ServiceParams.typeUrl || Array.isArray(o.storage) && (!o.storage.length || StorageParams.is(o.storage[0])));
  },
  isSDK(o: any): o is ServiceParamsSDKType {
    return o && (o.$typeUrl === ServiceParams.typeUrl || Array.isArray(o.storage) && (!o.storage.length || StorageParams.isSDK(o.storage[0])));
  },
  isAmino(o: any): o is ServiceParamsAmino {
    return o && (o.$typeUrl === ServiceParams.typeUrl || Array.isArray(o.storage) && (!o.storage.length || StorageParams.isAmino(o.storage[0])));
  },
  encode(message: ServiceParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.storage) {
      StorageParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.storage.push(StorageParams.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceParams>): ServiceParams {
    const message = createBaseServiceParams();
    message.storage = object.storage?.map(e => StorageParams.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceParamsAmino): ServiceParams {
    const message = createBaseServiceParams();
    message.storage = object.storage?.map(e => StorageParams.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceParams): ServiceParamsAmino {
    const obj: any = {};
    if (message.storage) {
      obj.storage = message.storage.map(e => e ? StorageParams.toAmino(e) : undefined);
    } else {
      obj.storage = message.storage;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceParamsAminoMsg): ServiceParams {
    return ServiceParams.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceParamsProtoMsg): ServiceParams {
    return ServiceParams.decode(message.value);
  },
  toProto(message: ServiceParams): Uint8Array {
    return ServiceParams.encode(message).finish();
  },
  toProtoMsg(message: ServiceParams): ServiceParamsProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta1.ServiceParams",
      value: ServiceParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceParams.typeUrl, ServiceParams);
function createBaseService(): Service {
  return {
    name: "",
    image: "",
    command: [],
    args: [],
    env: [],
    resources: ResourceUnits.fromPartial({}),
    count: 0,
    expose: [],
    params: undefined
  };
}
export const Service = {
  typeUrl: "/akash.manifest.v2beta1.Service",
  is(o: any): o is Service {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.image === "string" && Array.isArray(o.command) && (!o.command.length || typeof o.command[0] === "string") && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string") && ResourceUnits.is(o.resources) && typeof o.count === "number" && Array.isArray(o.expose) && (!o.expose.length || ServiceExpose.is(o.expose[0])));
  },
  isSDK(o: any): o is ServiceSDKType {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.image === "string" && Array.isArray(o.command) && (!o.command.length || typeof o.command[0] === "string") && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string") && ResourceUnits.isSDK(o.resources) && typeof o.count === "number" && Array.isArray(o.expose) && (!o.expose.length || ServiceExpose.isSDK(o.expose[0])));
  },
  isAmino(o: any): o is ServiceAmino {
    return o && (o.$typeUrl === Service.typeUrl || typeof o.name === "string" && typeof o.image === "string" && Array.isArray(o.command) && (!o.command.length || typeof o.command[0] === "string") && Array.isArray(o.args) && (!o.args.length || typeof o.args[0] === "string") && ResourceUnits.isAmino(o.resources) && typeof o.count === "number" && Array.isArray(o.expose) && (!o.expose.length || ServiceExpose.isAmino(o.expose[0])));
  },
  encode(message: Service, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.image !== "") {
      writer.uint32(18).string(message.image);
    }
    for (const v of message.command) {
      writer.uint32(26).string(v!);
    }
    for (const v of message.args) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.env) {
      writer.uint32(42).string(v!);
    }
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(50).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(56).uint32(message.count);
    }
    for (const v of message.expose) {
      ServiceExpose.encode(v!, writer.uint32(66).fork()).ldelim();
    }
    if (message.params !== undefined) {
      ServiceParams.encode(message.params, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Service {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.image = reader.string();
          break;
        case 3:
          message.command.push(reader.string());
          break;
        case 4:
          message.args.push(reader.string());
          break;
        case 5:
          message.env.push(reader.string());
          break;
        case 6:
          message.resources = ResourceUnits.decode(reader, reader.uint32());
          break;
        case 7:
          message.count = reader.uint32();
          break;
        case 8:
          message.expose.push(ServiceExpose.decode(reader, reader.uint32()));
          break;
        case 9:
          message.params = ServiceParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Service>): Service {
    const message = createBaseService();
    message.name = object.name ?? "";
    message.image = object.image ?? "";
    message.command = object.command?.map(e => e) || [];
    message.args = object.args?.map(e => e) || [];
    message.env = object.env?.map(e => e) || [];
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.expose = object.expose?.map(e => ServiceExpose.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? ServiceParams.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: ServiceAmino): Service {
    const message = createBaseService();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.image !== undefined && object.image !== null) {
      message.image = object.image;
    }
    message.command = object.command?.map(e => e) || [];
    message.args = object.args?.map(e => e) || [];
    message.env = object.env?.map(e => e) || [];
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    message.expose = object.expose?.map(e => ServiceExpose.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = ServiceParams.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: Service): ServiceAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.image = message.image ?? "";
    if (message.command) {
      obj.command = message.command.map(e => e);
    } else {
      obj.command = message.command;
    }
    if (message.args) {
      obj.args = message.args.map(e => e);
    } else {
      obj.args = message.args;
    }
    if (message.env) {
      obj.env = message.env.map(e => e);
    } else {
      obj.env = message.env;
    }
    obj.resources = message.resources ? ResourceUnits.toAmino(message.resources) : ResourceUnits.toAmino(ResourceUnits.fromPartial({}));
    obj.count = message.count ?? 0;
    if (message.expose) {
      obj.expose = message.expose.map(e => e ? ServiceExpose.toAmino(e) : undefined);
    } else {
      obj.expose = message.expose;
    }
    obj.params = message.params ? ServiceParams.toAmino(message.params) : ServiceParams.toAmino(ServiceParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ServiceAminoMsg): Service {
    return Service.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceProtoMsg): Service {
    return Service.decode(message.value);
  },
  toProto(message: Service): Uint8Array {
    return Service.encode(message).finish();
  },
  toProtoMsg(message: Service): ServiceProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta1.Service",
      value: Service.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Service.typeUrl, Service);