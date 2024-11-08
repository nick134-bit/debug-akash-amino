import { Resources, ResourcesAmino, ResourcesSDKType } from "../../base/v1beta3/resources";
import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnit {
  resource: Resources;
  count: number;
  price: DecCoin;
}
export interface ResourceUnitProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.ResourceUnit";
  value: Uint8Array;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitAmino {
  resource: ResourcesAmino;
  count: number;
  price: DecCoinAmino;
}
export interface ResourceUnitAminoMsg {
  type: "/akash.deployment.v1beta3.ResourceUnit";
  value: ResourceUnitAmino;
}
/** ResourceUnit extends Resources and adds Count along with the Price */
export interface ResourceUnitSDKType {
  resource: ResourcesSDKType;
  count: number;
  price: DecCoinSDKType;
}
function createBaseResourceUnit(): ResourceUnit {
  return {
    resource: Resources.fromPartial({}),
    count: 0,
    price: DecCoin.fromPartial({})
  };
}
export const ResourceUnit = {
  typeUrl: "/akash.deployment.v1beta3.ResourceUnit",
  is(o: any): o is ResourceUnit {
    return o && (o.$typeUrl === ResourceUnit.typeUrl || Resources.is(o.resource) && typeof o.count === "number" && DecCoin.is(o.price));
  },
  isSDK(o: any): o is ResourceUnitSDKType {
    return o && (o.$typeUrl === ResourceUnit.typeUrl || Resources.isSDK(o.resource) && typeof o.count === "number" && DecCoin.isSDK(o.price));
  },
  isAmino(o: any): o is ResourceUnitAmino {
    return o && (o.$typeUrl === ResourceUnit.typeUrl || Resources.isAmino(o.resource) && typeof o.count === "number" && DecCoin.isAmino(o.price));
  },
  encode(message: ResourceUnit, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resource !== undefined) {
      Resources.encode(message.resource, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceUnit {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceUnit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resource = Resources.decode(reader, reader.uint32());
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
  fromPartial(object: Partial<ResourceUnit>): ResourceUnit {
    const message = createBaseResourceUnit();
    message.resource = object.resource !== undefined && object.resource !== null ? Resources.fromPartial(object.resource) : undefined;
    message.count = object.count ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    return message;
  },
  fromAmino(object: ResourceUnitAmino): ResourceUnit {
    const message = createBaseResourceUnit();
    if (object.resource !== undefined && object.resource !== null) {
      message.resource = Resources.fromAmino(object.resource);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    return message;
  },
  toAmino(message: ResourceUnit): ResourceUnitAmino {
    const obj: any = {};
    obj.resource = message.resource ? Resources.toAmino(message.resource) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ResourceUnitAminoMsg): ResourceUnit {
    return ResourceUnit.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceUnitProtoMsg): ResourceUnit {
    return ResourceUnit.decode(message.value);
  },
  toProto(message: ResourceUnit): Uint8Array {
    return ResourceUnit.encode(message).finish();
  },
  toProtoMsg(message: ResourceUnit): ResourceUnitProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.ResourceUnit",
      value: ResourceUnit.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResourceUnit.typeUrl, ResourceUnit);