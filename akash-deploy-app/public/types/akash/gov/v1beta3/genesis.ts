import { DepositParams, DepositParamsAmino, DepositParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  depositParams: DepositParams;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.gov.v1beta3.GenesisState";
  value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateAmino {
  deposit_params: DepositParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.gov.v1beta3.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
  deposit_params: DepositParamsSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    depositParams: DepositParams.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/akash.gov.v1beta3.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || DepositParams.is(o.depositParams));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || DepositParams.isSDK(o.deposit_params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || DepositParams.isAmino(o.deposit_params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.depositParams !== undefined) {
      DepositParams.encode(message.depositParams, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.depositParams = DepositParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.depositParams = object.depositParams !== undefined && object.depositParams !== null ? DepositParams.fromPartial(object.depositParams) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    if (object.deposit_params !== undefined && object.deposit_params !== null) {
      message.depositParams = DepositParams.fromAmino(object.deposit_params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    obj.deposit_params = message.depositParams ? DepositParams.toAmino(message.depositParams) : DepositParams.toAmino(DepositParams.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: GenesisStateAminoMsg): GenesisState {
    return GenesisState.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisStateProtoMsg): GenesisState {
    return GenesisState.decode(message.value);
  },
  toProto(message: GenesisState): Uint8Array {
    return GenesisState.encode(message).finish();
  },
  toProtoMsg(message: GenesisState): GenesisStateProtoMsg {
    return {
      typeUrl: "/akash.gov.v1beta3.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);