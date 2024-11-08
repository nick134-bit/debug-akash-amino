import { ResourcePair, ResourcePairAmino, ResourcePairSDKType } from "./resourcepair";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** StorageInfo reports Storage details */
export interface StorageInfo {
  class: string;
  iops: string;
}
export interface StorageInfoProtoMsg {
  typeUrl: "/akash.inventory.v1.StorageInfo";
  value: Uint8Array;
}
/** StorageInfo reports Storage details */
export interface StorageInfoAmino {
  class: string;
  iops: string;
}
export interface StorageInfoAminoMsg {
  type: "/akash.inventory.v1.StorageInfo";
  value: StorageInfoAmino;
}
/** StorageInfo reports Storage details */
export interface StorageInfoSDKType {
  class: string;
  iops: string;
}
/** Storage reports Storage inventory details */
export interface Storage {
  quantity: ResourcePair;
  info: StorageInfo;
}
export interface StorageProtoMsg {
  typeUrl: "/akash.inventory.v1.Storage";
  value: Uint8Array;
}
/** Storage reports Storage inventory details */
export interface StorageAmino {
  quantity: ResourcePairAmino;
  info: StorageInfoAmino;
}
export interface StorageAminoMsg {
  type: "/akash.inventory.v1.Storage";
  value: StorageAmino;
}
/** Storage reports Storage inventory details */
export interface StorageSDKType {
  quantity: ResourcePairSDKType;
  info: StorageInfoSDKType;
}
function createBaseStorageInfo(): StorageInfo {
  return {
    class: "",
    iops: ""
  };
}
export const StorageInfo = {
  typeUrl: "/akash.inventory.v1.StorageInfo",
  is(o: any): o is StorageInfo {
    return o && (o.$typeUrl === StorageInfo.typeUrl || typeof o.class === "string" && typeof o.iops === "string");
  },
  isSDK(o: any): o is StorageInfoSDKType {
    return o && (o.$typeUrl === StorageInfo.typeUrl || typeof o.class === "string" && typeof o.iops === "string");
  },
  isAmino(o: any): o is StorageInfoAmino {
    return o && (o.$typeUrl === StorageInfo.typeUrl || typeof o.class === "string" && typeof o.iops === "string");
  },
  encode(message: StorageInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.class !== "") {
      writer.uint32(10).string(message.class);
    }
    if (message.iops !== "") {
      writer.uint32(18).string(message.iops);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): StorageInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseStorageInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.class = reader.string();
          break;
        case 2:
          message.iops = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<StorageInfo>): StorageInfo {
    const message = createBaseStorageInfo();
    message.class = object.class ?? "";
    message.iops = object.iops ?? "";
    return message;
  },
  fromAmino(object: StorageInfoAmino): StorageInfo {
    const message = createBaseStorageInfo();
    if (object.class !== undefined && object.class !== null) {
      message.class = object.class;
    }
    if (object.iops !== undefined && object.iops !== null) {
      message.iops = object.iops;
    }
    return message;
  },
  toAmino(message: StorageInfo): StorageInfoAmino {
    const obj: any = {};
    obj.class = message.class ?? "";
    obj.iops = message.iops ?? "";
    return obj;
  },
  fromAminoMsg(object: StorageInfoAminoMsg): StorageInfo {
    return StorageInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: StorageInfoProtoMsg): StorageInfo {
    return StorageInfo.decode(message.value);
  },
  toProto(message: StorageInfo): Uint8Array {
    return StorageInfo.encode(message).finish();
  },
  toProtoMsg(message: StorageInfo): StorageInfoProtoMsg {
    return {
      typeUrl: "/akash.inventory.v1.StorageInfo",
      value: StorageInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(StorageInfo.typeUrl, StorageInfo);
function createBaseStorage(): Storage {
  return {
    quantity: ResourcePair.fromPartial({}),
    info: StorageInfo.fromPartial({})
  };
}
export const Storage = {
  typeUrl: "/akash.inventory.v1.Storage",
  is(o: any): o is Storage {
    return o && (o.$typeUrl === Storage.typeUrl || ResourcePair.is(o.quantity) && StorageInfo.is(o.info));
  },
  isSDK(o: any): o is StorageSDKType {
    return o && (o.$typeUrl === Storage.typeUrl || ResourcePair.isSDK(o.quantity) && StorageInfo.isSDK(o.info));
  },
  isAmino(o: any): o is StorageAmino {
    return o && (o.$typeUrl === Storage.typeUrl || ResourcePair.isAmino(o.quantity) && StorageInfo.isAmino(o.info));
  },
  encode(message: Storage, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.quantity !== undefined) {
      ResourcePair.encode(message.quantity, writer.uint32(10).fork()).ldelim();
    }
    if (message.info !== undefined) {
      StorageInfo.encode(message.info, writer.uint32(18).fork()).ldelim();
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
          message.quantity = ResourcePair.decode(reader, reader.uint32());
          break;
        case 2:
          message.info = StorageInfo.decode(reader, reader.uint32());
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
    message.quantity = object.quantity !== undefined && object.quantity !== null ? ResourcePair.fromPartial(object.quantity) : undefined;
    message.info = object.info !== undefined && object.info !== null ? StorageInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: StorageAmino): Storage {
    const message = createBaseStorage();
    if (object.quantity !== undefined && object.quantity !== null) {
      message.quantity = ResourcePair.fromAmino(object.quantity);
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = StorageInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: Storage): StorageAmino {
    const obj: any = {};
    obj.quantity = message.quantity ? ResourcePair.toAmino(message.quantity) : ResourcePair.toAmino(ResourcePair.fromPartial({}));
    obj.info = message.info ? StorageInfo.toAmino(message.info) : StorageInfo.toAmino(StorageInfo.fromPartial({}));
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
      typeUrl: "/akash.inventory.v1.Storage",
      value: Storage.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Storage.typeUrl, Storage);