import { Service, ServiceAmino, ServiceSDKType } from "./service";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Group store name and list of services */
export interface Group {
  name: string;
  services: Service[];
}
export interface GroupProtoMsg {
  typeUrl: "/akash.manifest.v2beta2.Group";
  value: Uint8Array;
}
/** Group store name and list of services */
export interface GroupAmino {
  name: string;
  services: ServiceAmino[];
}
export interface GroupAminoMsg {
  type: "/akash.manifest.v2beta2.Group";
  value: GroupAmino;
}
/** Group store name and list of services */
export interface GroupSDKType {
  name: string;
  services: ServiceSDKType[];
}
function createBaseGroup(): Group {
  return {
    name: "",
    services: []
  };
}
export const Group = {
  typeUrl: "/akash.manifest.v2beta2.Group",
  is(o: any): o is Group {
    return o && (o.$typeUrl === Group.typeUrl || typeof o.name === "string" && Array.isArray(o.services) && (!o.services.length || Service.is(o.services[0])));
  },
  isSDK(o: any): o is GroupSDKType {
    return o && (o.$typeUrl === Group.typeUrl || typeof o.name === "string" && Array.isArray(o.services) && (!o.services.length || Service.isSDK(o.services[0])));
  },
  isAmino(o: any): o is GroupAmino {
    return o && (o.$typeUrl === Group.typeUrl || typeof o.name === "string" && Array.isArray(o.services) && (!o.services.length || Service.isAmino(o.services[0])));
  },
  encode(message: Group, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.services) {
      Service.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Group {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroup();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.services.push(Service.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Group>): Group {
    const message = createBaseGroup();
    message.name = object.name ?? "";
    message.services = object.services?.map(e => Service.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GroupAmino): Group {
    const message = createBaseGroup();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    message.services = object.services?.map(e => Service.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Group): GroupAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    if (message.services) {
      obj.services = message.services.map(e => e ? Service.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: GroupAminoMsg): Group {
    return Group.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupProtoMsg): Group {
    return Group.decode(message.value);
  },
  toProto(message: Group): Uint8Array {
    return Group.encode(message).finish();
  },
  toProtoMsg(message: Group): GroupProtoMsg {
    return {
      typeUrl: "/akash.manifest.v2beta2.Group",
      value: Group.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Group.typeUrl, Group);