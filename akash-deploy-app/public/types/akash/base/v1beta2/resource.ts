import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** CPU stores resource units and cpu config attributes */
export interface CPU {
  units: ResourceValue;
  attributes: Attribute[];
}
export interface CPUProtoMsg {
  typeUrl: "/akash.base.v1beta2.CPU";
  value: Uint8Array;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUAmino {
  units?: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface CPUAminoMsg {
  type: "/akash.base.v1beta2.CPU";
  value: CPUAmino;
}
/** CPU stores resource units and cpu config attributes */
export interface CPUSDKType {
  units: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Memory stores resource quantity and memory attributes */
export interface Memory {
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface MemoryProtoMsg {
  typeUrl: "/akash.base.v1beta2.Memory";
  value: Uint8Array;
}
/** Memory stores resource quantity and memory attributes */
export interface MemoryAmino {
  quantity: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface MemoryAminoMsg {
  type: "/akash.base.v1beta2.Memory";
  value: MemoryAmino;
}
/** Memory stores resource quantity and memory attributes */
export interface MemorySDKType {
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
/** Storage stores resource quantity and storage attributes */
export interface Storage {
  name: string;
  quantity: ResourceValue;
  attributes: Attribute[];
}
export interface StorageProtoMsg {
  typeUrl: "/akash.base.v1beta2.Storage";
  value: Uint8Array;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageAmino {
  name: string;
  quantity: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface StorageAminoMsg {
  type: "/akash.base.v1beta2.Storage";
  value: StorageAmino;
}
/** Storage stores resource quantity and storage attributes */
export interface StorageSDKType {
  name: string;
  quantity: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
function createBaseCPU(): CPU {
  return {
    units: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const CPU = {
  typeUrl: "/akash.base.v1beta2.CPU",
  is(o: any): o is CPU {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.is(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is CPUSDKType {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.isSDK(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is CPUAmino {
    return o && (o.$typeUrl === CPU.typeUrl || ResourceValue.isAmino(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: CPU, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CPU {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCPU();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.units = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CPU>): CPU {
    const message = createBaseCPU();
    message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: CPUAmino): CPU {
    const message = createBaseCPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromAmino(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: CPU): CPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: CPUAminoMsg): CPU {
    return CPU.fromAmino(object.value);
  },
  fromProtoMsg(message: CPUProtoMsg): CPU {
    return CPU.decode(message.value);
  },
  toProto(message: CPU): Uint8Array {
    return CPU.encode(message).finish();
  },
  toProtoMsg(message: CPU): CPUProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.CPU",
      value: CPU.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CPU.typeUrl, CPU);
function createBaseMemory(): Memory {
  return {
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Memory = {
  typeUrl: "/akash.base.v1beta2.Memory",
  is(o: any): o is Memory {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.is(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is MemorySDKType {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.isSDK(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is MemoryAmino {
    return o && (o.$typeUrl === Memory.typeUrl || ResourceValue.isAmino(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: Memory, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Memory {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMemory();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 2:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Memory>): Memory {
    const message = createBaseMemory();
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MemoryAmino): Memory {
    const message = createBaseMemory();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Memory): MemoryAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: MemoryAminoMsg): Memory {
    return Memory.fromAmino(object.value);
  },
  fromProtoMsg(message: MemoryProtoMsg): Memory {
    return Memory.decode(message.value);
  },
  toProto(message: Memory): Uint8Array {
    return Memory.encode(message).finish();
  },
  toProtoMsg(message: Memory): MemoryProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.Memory",
      value: Memory.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Memory.typeUrl, Memory);
function createBaseStorage(): Storage {
  return {
    name: "",
    quantity: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const Storage = {
  typeUrl: "/akash.base.v1beta2.Storage",
  is(o: any): o is Storage {
    return o && (o.$typeUrl === Storage.typeUrl || typeof o.name === "string" && ResourceValue.is(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is StorageSDKType {
    return o && (o.$typeUrl === Storage.typeUrl || typeof o.name === "string" && ResourceValue.isSDK(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is StorageAmino {
    return o && (o.$typeUrl === Storage.typeUrl || typeof o.name === "string" && ResourceValue.isAmino(o.quantity) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.quantity !== undefined) {
      ResourceValue.encode(message.quantity, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Storage {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.quantity = ResourceValue.decode(reader, reader.uint32());
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Storage>): Storage {
    const message = createBaseStorage();
    message.name = object.name ?? "";
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourceValue.fromPartial(object.quantity) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourceValue.fromAmino(object.quantity);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.quantity = message.quantity ? ResourceValue.toAmino(message.quantity) : ResourceValue.toAmino(ResourceValue.fromPartial({}));
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: StorageAminoMsg): Storage {
    return Storage.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageProtoMsg): Storage {
    return Storage.decode(message.value);
  },
  toProto(message: Storage): Uint8Array {
    return Storage.encode(message).finish();
  },
  toProtoMsg(message: Storage): StorageProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta2.Storage",
      value: Storage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Storage.typeUrl, Storage);