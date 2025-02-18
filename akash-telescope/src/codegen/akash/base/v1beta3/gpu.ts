import { ResourceValue, ResourceValueAmino, ResourceValueSDKType } from "./resourcevalue";
import { Attribute, AttributeAmino, AttributeSDKType } from "./attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GPU stores resource units and cpu config attributes */
export interface GPU {
  units: ResourceValue;
  attributes: Attribute[];
}
export interface GPUProtoMsg {
  typeUrl: "/akash.base.v1beta3.GPU";
  value: Uint8Array;
}
/** GPU stores resource units and cpu config attributes */
export interface GPUAmino {
  units?: ResourceValueAmino;
  attributes?: AttributeAmino[];
}
export interface GPUAminoMsg {
  type: "/akash.base.v1beta3.GPU";
  value: GPUAmino;
}
/** GPU stores resource units and cpu config attributes */
export interface GPUSDKType {
  units: ResourceValueSDKType;
  attributes: AttributeSDKType[];
}
function createBaseGPU(): GPU {
  return {
    units: ResourceValue.fromPartial({}),
    attributes: []
  };
}
export const GPU = {
  typeUrl: "/akash.base.v1beta3.GPU",
  is(o: any): o is GPU {
    return o && (o.$typeUrl === GPU.typeUrl || ResourceValue.is(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])));
  },
  isSDK(o: any): o is GPUSDKType {
    return o && (o.$typeUrl === GPU.typeUrl || ResourceValue.isSDK(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])));
  },
  isAmino(o: any): o is GPUAmino {
    return o && (o.$typeUrl === GPU.typeUrl || ResourceValue.isAmino(o.units) && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])));
  },
  encode(message: GPU, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.units !== undefined) {
      ResourceValue.encode(message.units, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GPU {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGPU();
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
  fromPartial(object: Partial<GPU>): GPU {
    const message = createBaseGPU();
    message.units = object.units !== undefined && object.units !== null ? ResourceValue.fromPartial(object.units) : undefined;
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GPUAmino): GPU {
    const message = createBaseGPU();
    if (object.units !== undefined && object.units !== null) {
      message.units = ResourceValue.fromAmino(object.units);
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GPU): GPUAmino {
    const obj: any = {};
    obj.units = message.units ? ResourceValue.toAmino(message.units) : undefined;
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    return obj;
  },
  fromAminoMsg(object: GPUAminoMsg): GPU {
    return GPU.fromAmino(object.value);
  },
  fromProtoMsg(message: GPUProtoMsg): GPU {
    return GPU.decode(message.value);
  },
  toProto(message: GPU): Uint8Array {
    return GPU.encode(message).finish();
  },
  toProtoMsg(message: GPU): GPUProtoMsg {
    return {
      typeUrl: "/akash.base.v1beta3.GPU",
      value: GPU.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GPU.typeUrl, GPU);