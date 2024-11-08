import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
  owner: string;
  dseq: bigint;
  gseq: number;
}
export interface GroupIDProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.GroupID";
  value: Uint8Array;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDAmino {
  owner: string;
  dseq: string;
  gseq: number;
}
export interface GroupIDAminoMsg {
  type: "/akash.deployment.v1beta3.GroupID";
  value: GroupIDAmino;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
}
function createBaseGroupID(): GroupID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0
  };
}
export const GroupID = {
  typeUrl: "/akash.deployment.v1beta3.GroupID",
  is(o: any): o is GroupID {
    return o && (o.$typeUrl === GroupID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number");
  },
  isSDK(o: any): o is GroupIDSDKType {
    return o && (o.$typeUrl === GroupID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number");
  },
  isAmino(o: any): o is GroupIDAmino {
    return o && (o.$typeUrl === GroupID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number");
  },
  encode(message: GroupID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.dseq = reader.uint64();
          break;
        case 3:
          message.gseq = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GroupID>): GroupID {
    const message = createBaseGroupID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    return message;
  },
  fromAmino(object: GroupIDAmino): GroupID {
    const message = createBaseGroupID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    return message;
  },
  toAmino(message: GroupID): GroupIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    return obj;
  },
  fromAminoMsg(object: GroupIDAminoMsg): GroupID {
    return GroupID.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupIDProtoMsg): GroupID {
    return GroupID.decode(message.value);
  },
  toProto(message: GroupID): Uint8Array {
    return GroupID.encode(message).finish();
  },
  toProtoMsg(message: GroupID): GroupIDProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.GroupID",
      value: GroupID.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GroupID.typeUrl, GroupID);