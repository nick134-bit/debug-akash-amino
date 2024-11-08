import { BinaryReader, BinaryWriter } from "../../../binary";
import { bytesFromBase64, base64FromBytes } from "../../../helpers";
import { GlobalDecoderRegistry } from "../../../registry";
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParams {
  /**
   * min_initial_deposit_rate minimum % of TotalDeposit
   * author of the proposal must put in order for proposal tx to be committed
   */
  minInitialDepositRate: Uint8Array;
}
export interface DepositParamsProtoMsg {
  typeUrl: "/akash.gov.v1beta3.DepositParams";
  value: Uint8Array;
}
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParamsAmino {
  /**
   * min_initial_deposit_rate minimum % of TotalDeposit
   * author of the proposal must put in order for proposal tx to be committed
   */
  min_initial_deposit_rate: string;
}
export interface DepositParamsAminoMsg {
  type: "/akash.gov.v1beta3.DepositParams";
  value: DepositParamsAmino;
}
/** DepositParams defines the parameters for the x/gov module */
export interface DepositParamsSDKType {
  min_initial_deposit_rate: Uint8Array;
}
function createBaseDepositParams(): DepositParams {
  return {
    minInitialDepositRate: new Uint8Array()
  };
}
export const DepositParams = {
  typeUrl: "/akash.gov.v1beta3.DepositParams",
  is(o: any): o is DepositParams {
    return o && (o.$typeUrl === DepositParams.typeUrl || o.minInitialDepositRate instanceof Uint8Array || typeof o.minInitialDepositRate === "string");
  },
  isSDK(o: any): o is DepositParamsSDKType {
    return o && (o.$typeUrl === DepositParams.typeUrl || o.min_initial_deposit_rate instanceof Uint8Array || typeof o.min_initial_deposit_rate === "string");
  },
  isAmino(o: any): o is DepositParamsAmino {
    return o && (o.$typeUrl === DepositParams.typeUrl || o.min_initial_deposit_rate instanceof Uint8Array || typeof o.min_initial_deposit_rate === "string");
  },
  encode(message: DepositParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.minInitialDepositRate.length !== 0) {
      writer.uint32(10).bytes(message.minInitialDepositRate);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): DepositParams {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDepositParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.minInitialDepositRate = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<DepositParams>): DepositParams {
    const message = createBaseDepositParams();
    message.minInitialDepositRate = object.minInitialDepositRate ?? new Uint8Array();
    return message;
  },
  fromAmino(object: DepositParamsAmino): DepositParams {
    const message = createBaseDepositParams();
    if (object.min_initial_deposit_rate !== undefined && object.min_initial_deposit_rate !== null) {
      message.minInitialDepositRate = bytesFromBase64(object.min_initial_deposit_rate);
    }
    return message;
  },
  toAmino(message: DepositParams): DepositParamsAmino {
    const obj: any = {};
    obj.min_initial_deposit_rate = message.minInitialDepositRate ? base64FromBytes(message.minInitialDepositRate) : "";
    return obj;
  },
  fromAminoMsg(object: DepositParamsAminoMsg): DepositParams {
    return DepositParams.fromAmino(object.value);
  },
  fromProtoMsg(message: DepositParamsProtoMsg): DepositParams {
    return DepositParams.decode(message.value);
  },
  toProto(message: DepositParams): Uint8Array {
    return DepositParams.encode(message).finish();
  },
  toProtoMsg(message: DepositParams): DepositParamsProtoMsg {
    return {
      typeUrl: "/akash.gov.v1beta3.DepositParams",
      value: DepositParams.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(DepositParams.typeUrl, DepositParams);