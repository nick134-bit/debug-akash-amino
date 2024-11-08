import { Deployment, DeploymentAmino, DeploymentSDKType } from "./deployment";
import { Group, GroupAmino, GroupSDKType } from "./group";
import { Params, ParamsAmino, ParamsSDKType } from "./params";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeployment {
  deployment: Deployment;
  groups: Group[];
}
export interface GenesisDeploymentProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GenesisDeployment";
  value: Uint8Array;
}
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentAmino {
  deployment: DeploymentAmino;
  groups: GroupAmino[];
}
export interface GenesisDeploymentAminoMsg {
  type: "/akash.deployment.v1beta2.GenesisDeployment";
  value: GenesisDeploymentAmino;
}
/** GenesisDeployment defines the basic genesis state used by deployment module */
export interface GenesisDeploymentSDKType {
  deployment: DeploymentSDKType;
  groups: GroupSDKType[];
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisState {
  deployments: GenesisDeployment[];
  params: Params;
}
export interface GenesisStateProtoMsg {
  typeUrl: "/akash.deployment.v1beta2.GenesisState";
  value: Uint8Array;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateAmino {
  deployments: GenesisDeploymentAmino[];
  params: ParamsAmino;
}
export interface GenesisStateAminoMsg {
  type: "/akash.deployment.v1beta2.GenesisState";
  value: GenesisStateAmino;
}
/** GenesisState stores slice of genesis deployment instance */
export interface GenesisStateSDKType {
  deployments: GenesisDeploymentSDKType[];
  params: ParamsSDKType;
}
function createBaseGenesisDeployment(): GenesisDeployment {
  return {
    deployment: Deployment.fromPartial({}),
    groups: []
  };
}
export const GenesisDeployment = {
  typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
  is(o: any): o is GenesisDeployment {
    return o && (o.$typeUrl === GenesisDeployment.typeUrl || Deployment.is(o.deployment) && Array.isArray(o.groups) && (!o.groups.length || Group.is(o.groups[0])));
  },
  isSDK(o: any): o is GenesisDeploymentSDKType {
    return o && (o.$typeUrl === GenesisDeployment.typeUrl || Deployment.isSDK(o.deployment) && Array.isArray(o.groups) && (!o.groups.length || Group.isSDK(o.groups[0])));
  },
  isAmino(o: any): o is GenesisDeploymentAmino {
    return o && (o.$typeUrl === GenesisDeployment.typeUrl || Deployment.isAmino(o.deployment) && Array.isArray(o.groups) && (!o.groups.length || Group.isAmino(o.groups[0])));
  },
  encode(message: GenesisDeployment, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployment !== undefined) {
      Deployment.encode(message.deployment, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.groups) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): GenesisDeployment {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisDeployment();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.deployment = Deployment.decode(reader, reader.uint32());
          break;
        case 2:
          message.groups.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<GenesisDeployment>): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    message.deployment = object.deployment !== undefined && object.deployment !== null ? Deployment.fromPartial(object.deployment) : undefined;
    message.groups = object.groups?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: GenesisDeploymentAmino): GenesisDeployment {
    const message = createBaseGenesisDeployment();
    if (object.deployment !== undefined && object.deployment !== null) {
      message.deployment = Deployment.fromAmino(object.deployment);
    }
    message.groups = object.groups?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: GenesisDeployment): GenesisDeploymentAmino {
    const obj: any = {};
    obj.deployment = message.deployment ? Deployment.toAmino(message.deployment) : Deployment.toAmino(Deployment.fromPartial({}));
    if (message.groups) {
      obj.groups = message.groups.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.groups = message.groups;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisDeploymentAminoMsg): GenesisDeployment {
    return GenesisDeployment.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisDeploymentProtoMsg): GenesisDeployment {
    return GenesisDeployment.decode(message.value);
  },
  toProto(message: GenesisDeployment): Uint8Array {
    return GenesisDeployment.encode(message).finish();
  },
  toProtoMsg(message: GenesisDeployment): GenesisDeploymentProtoMsg {
    return {
      typeUrl: "/akash.deployment.v1beta2.GenesisDeployment",
      value: GenesisDeployment.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisDeployment.typeUrl, GenesisDeployment);
function createBaseGenesisState(): GenesisState {
  return {
    deployments: [],
    params: Params.fromPartial({})
  };
}
export const GenesisState = {
  typeUrl: "/akash.deployment.v1beta2.GenesisState",
  is(o: any): o is GenesisState {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.deployments) && (!o.deployments.length || GenesisDeployment.is(o.deployments[0])) && Params.is(o.params));
  },
  isSDK(o: any): o is GenesisStateSDKType {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.deployments) && (!o.deployments.length || GenesisDeployment.isSDK(o.deployments[0])) && Params.isSDK(o.params));
  },
  isAmino(o: any): o is GenesisStateAmino {
    return o && (o.$typeUrl === GenesisState.typeUrl || Array.isArray(o.deployments) && (!o.deployments.length || GenesisDeployment.isAmino(o.deployments[0])) && Params.isAmino(o.params));
  },
  encode(message: GenesisState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.deployments) {
      GenesisDeployment.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
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
          message.deployments.push(GenesisDeployment.decode(reader, reader.uint32()));
          break;
        case 2:
          message.params = Params.decode(reader, reader.uint32());
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
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromPartial(e)) || [];
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  },
  fromAmino(object: GenesisStateAmino): GenesisState {
    const message = createBaseGenesisState();
    message.deployments = object.deployments?.map(e => GenesisDeployment.fromAmino(e)) || [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromAmino(object.params);
    }
    return message;
  },
  toAmino(message: GenesisState): GenesisStateAmino {
    const obj: any = {};
    if (message.deployments) {
      obj.deployments = message.deployments.map(e => e ? GenesisDeployment.toAmino(e) : undefined);
    } else {
      obj.deployments = message.deployments;
    }
    obj.params = message.params ? Params.toAmino(message.params) : Params.toAmino(Params.fromPartial({}));
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
      typeUrl: "/akash.deployment.v1beta2.GenesisState",
      value: GenesisState.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(GenesisState.typeUrl, GenesisState);