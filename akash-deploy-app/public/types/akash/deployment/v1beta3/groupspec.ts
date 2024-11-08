import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta3/attribute";
import { ResourceUnit, ResourceUnitAmino, ResourceUnitSDKType } from "./resourceunit";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GroupSpec stores group specifications */
export interface GroupSpec {
  name: string;
  requirements: PlacementRequirements;
  resources: ResourceUnit[];
}
export interface GroupSpecProtoMsg {
  typeUrl: "/akash.deployment.v1beta3.GroupSpec";
  value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
  name: string;
  requirements: PlacementRequirementsAmino;
  resources: ResourceUnitAmino[];
}
export interface GroupSpecAminoMsg {
  type: "/akash.deployment.v1beta3.GroupSpec";
  value: GroupSpecAmino;
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
  name: string;
  requirements: PlacementRequirementsSDKType;
  resources: ResourceUnitSDKType[];
}
function createBaseGroupSpec(): GroupSpec {
  return {
    name: "",
    requirements: PlacementRequirements.fromPartial({}),
    resources: []
  };
}
export const GroupSpec = {
  typeUrl: "/akash.deployment.v1beta3.GroupSpec",
  is(o: any): o is GroupSpec {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.is(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || ResourceUnit.is(o.resources[0])));
  },
  isSDK(o: any): o is GroupSpecSDKType {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.isSDK(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || ResourceUnit.isSDK(o.resources[0])));
  },
  isAmino(o: any): o is GroupSpecAmino {
    return o && (o.$typeUrl === GroupSpec.typeUrl || typeof o.name === "string" && PlacementRequirements.isAmino(o.requirements) && Array.isArray(o.resources) && (!o.resources.length || ResourceUnit.isAmino(o.resources[0])));
  },
  encode(message: GroupSpec, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.requirements !== undefined) {
      PlacementRequirements.encode(message.requirements, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.resources) {
      ResourceUnit.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GroupSpec {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGroupSpec();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.requirements = PlacementRequirements.decode(reader, reader.uint32());
          break;
        case 3:
          message.resources.push(ResourceUnit.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GroupSpec>): GroupSpec {
    const message = createBaseGroupSpec();
    message.name = object.name ?? "";
    message.requirements = object.requirements !== undefined && object.requirements !== null ? PlacementRequirements.fromPartial(object.requirements) : undefined;
    message.resources = object.resources?.map(e => ResourceUnit.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GroupSpecAmino): GroupSpec {
    const message = createBaseGroupSpec();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.requirements !== undefined && object.requirements !== null) {
      message.requirements = PlacementRequirements.fromAmino(object.requirements);
    }
    message.resources = object.resources?.map(e => ResourceUnit.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GroupSpec): GroupSpecAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.requirements = message.requirements ? PlacementRequirements.toAmino(message.requirements) : PlacementRequirements.toAmino(PlacementRequirements.fromPartial({}));
    if (message.resources) {
      obj.resources = message.resources.map(e => e ? ResourceUnit.toAmino(e) : undefined);
    } else {
      obj.resources = message.resources;
    }
    return obj;
  },
  fromAminoMsg(object: GroupSpecAminoMsg): GroupSpec {
    return GroupSpec.fromAmino(object.value);
  },
  fromProtoMsg(message: GroupSpecProtoMsg): GroupSpec {
    return GroupSpec.decode(message.value);
  },
  toProto(message: GroupSpec): Uint8Array {
    return GroupSpec.encode(message).finish();
  },
  toProtoMsg(message: GroupSpec): GroupSpecProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta3.GroupSpec",
      value: GroupSpec.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GroupSpec.typeUrl, GroupSpec);