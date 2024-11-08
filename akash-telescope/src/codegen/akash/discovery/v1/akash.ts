import { ClientInfo, ClientInfoAmino, ClientInfoSDKType } from "./client_info";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** Akash akash specific RPC parameters */
export interface Akash {
  clientInfo?: ClientInfo;
}
export interface AkashProtoMsg {
  typeUrl: "/akash.discovery.v1.Akash";
  value: Uint8Array;
}
/** Akash akash specific RPC parameters */
export interface AkashAmino {
  client_info: ClientInfoAmino;
}
export interface AkashAminoMsg {
  type: "/akash.discovery.v1.Akash";
  value: AkashAmino;
}
/** Akash akash specific RPC parameters */
export interface AkashSDKType {
  client_info?: ClientInfoSDKType;
}
function createBaseAkash(): Akash {
  return {
    clientInfo: undefined
  };
}
export const Akash = {
  typeUrl: "/akash.discovery.v1.Akash",
  is(o: any): o is Akash {
    return o && o.$typeUrl === Akash.typeUrl;
  },
  isSDK(o: any): o is AkashSDKType {
    return o && o.$typeUrl === Akash.typeUrl;
  },
  isAmino(o: any): o is AkashAmino {
    return o && o.$typeUrl === Akash.typeUrl;
  },
  encode(message: Akash, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.clientInfo !== undefined) {
      ClientInfo.encode(message.clientInfo, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Akash {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAkash();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientInfo = ClientInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Akash>): Akash {
    const message = createBaseAkash();
    message.clientInfo = object.clientInfo !== undefined && object.clientInfo !== null ? ClientInfo.fromPartial(object.clientInfo) : undefined;
    return message;
  },
  fromAmino(object: AkashAmino): Akash {
    const message = createBaseAkash();
    if (object.client_info !== undefined && object.client_info !== null) {
      message.clientInfo = ClientInfo.fromAmino(object.client_info);
    }
    return message;
  },
  toAmino(message: Akash): AkashAmino {
    const obj: any = {};
    obj.client_info = message.clientInfo ? ClientInfo.toAmino(message.clientInfo) : ClientInfo.toAmino(ClientInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: AkashAminoMsg): Akash {
    return Akash.fromAmino(object.value);
  },
  fromProtoMsg(message: AkashProtoMsg): Akash {
    return Akash.decode(message.value);
  },
  toProto(message: Akash): Uint8Array {
    return Akash.encode(message).finish();
  },
  toProtoMsg(message: Akash): AkashProtoMsg {
    return {
      typeUrl: "/akash.discovery.v1.Akash",
      value: Akash.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Akash.typeUrl, Akash);