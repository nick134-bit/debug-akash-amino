import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta2/resourceunits";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Resource stores unit, total count and price of resource */
export interface Resource {
  resources: ResourceUnits;
  count: number;
  price: DecCoin;
}
export interface ResourceProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.Resource";
  value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceAmino {
  resources: ResourceUnitsAmino;
  count: number;
  price: DecCoinAmino;
}
export interface ResourceAminoMsg {
  type: "/akash.deployment.v1beta2.Resource";
  value: ResourceAmino;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
  resources: ResourceUnitsSDKType;
  count: number;
  price: DecCoinSDKType;
}
function createBaseResource(): Resource {
  return {
    resources: ResourceUnits.fromPartial({}),
    count: 0,
    price: DecCoin.fromPartial({})
  };
}
export const Resource = {
  typeUrl: "/akash.deployment.v1beta2.Resource",
  is(o: any): o is Resource {
    return o && (o.$typeUrl === Resource.typeUrl || ResourceUnits.is(o.resources) && typeof o.count === "number" && DecCoin.is(o.price));
  },
  isSDK(o: any): o is ResourceSDKType {
    return o && (o.$typeUrl === Resource.typeUrl || ResourceUnits.isSDK(o.resources) && typeof o.count === "number" && DecCoin.isSDK(o.price));
  },
  isAmino(o: any): o is ResourceAmino {
    return o && (o.$typeUrl === Resource.typeUrl || ResourceUnits.isAmino(o.resources) && typeof o.count === "number" && DecCoin.isAmino(o.price));
  },
  encode(message: Resource, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resources !== undefined) {
      ResourceUnits.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Resource {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResource();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = ResourceUnits.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Resource>): Resource {
    const message = createBaseResource();
    message.resources = object.resources !== undefined && object.resources !== null ? ResourceUnits.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: ResourceAmino): Resource {
    const message = createBaseResource();
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = ResourceUnits.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: Resource): ResourceAmino {
    const obj: any = {};
    obj.resources = message.resources ? ResourceUnits.toAmino(message.resources) : ResourceUnits.toAmino(ResourceUnits.fromPartial({}));
    obj.count = message.count ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ResourceAminoMsg): Resource {
    return Resource.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceProtoMsg): Resource {
    return Resource.decode(message.value);
  },
  toProto(message: Resource): Uint8Array {
    return Resource.encode(message).finish();
  },
  toProtoMsg(message: Resource): ResourceProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.Resource",
      value: Resource.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Resource.typeUrl, Resource);