import { Attribute, AttributeAmino, AttributeSDKType } from "../../base/v1beta1/attribute";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
/** ProviderInfo */
export interface ProviderInfo {
  email: string;
  website: string;
}
export interface ProviderInfoProtoMsg {
  typeUrl: "/akash.provider.v1beta1.ProviderInfo";
  value: Uint8Array;
}
/** ProviderInfo */
export interface ProviderInfoAmino {
  email: string;
  website: string;
}
export interface ProviderInfoAminoMsg {
  type: "/akash.provider.v1beta1.ProviderInfo";
  value: ProviderInfoAmino;
}
/** ProviderInfo */
export interface ProviderInfoSDKType {
  email: string;
  website: string;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
export interface MsgCreateProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProvider";
  value: Uint8Array;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info: ProviderInfoAmino;
}
export interface MsgCreateProviderAminoMsg {
  type: "/akash.provider.v1beta1.MsgCreateProvider";
  value: MsgCreateProviderAmino;
}
/** MsgCreateProvider defines an SDK message for creating a provider */
export interface MsgCreateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponse {}
export interface MsgCreateProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse";
  value: Uint8Array;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseAmino {}
export interface MsgCreateProviderResponseAminoMsg {
  type: "/akash.provider.v1beta1.MsgCreateProviderResponse";
  value: MsgCreateProviderResponseAmino;
}
/** MsgCreateProviderResponse defines the Msg/CreateProvider response type. */
export interface MsgCreateProviderResponseSDKType {}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProvider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
export interface MsgUpdateProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider";
  value: Uint8Array;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info: ProviderInfoAmino;
}
export interface MsgUpdateProviderAminoMsg {
  type: "/akash.provider.v1beta1.MsgUpdateProvider";
  value: MsgUpdateProviderAmino;
}
/** MsgUpdateProvider defines an SDK message for updating a provider */
export interface MsgUpdateProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponse {}
export interface MsgUpdateProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse";
  value: Uint8Array;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseAmino {}
export interface MsgUpdateProviderResponseAminoMsg {
  type: "/akash.provider.v1beta1.MsgUpdateProviderResponse";
  value: MsgUpdateProviderResponseAmino;
}
/** MsgUpdateProviderResponse defines the Msg/UpdateProvider response type. */
export interface MsgUpdateProviderResponseSDKType {}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProvider {
  owner: string;
}
export interface MsgDeleteProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider";
  value: Uint8Array;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderAmino {
  owner: string;
}
export interface MsgDeleteProviderAminoMsg {
  type: "/akash.provider.v1beta1.MsgDeleteProvider";
  value: MsgDeleteProviderAmino;
}
/** MsgDeleteProvider defines an SDK message for deleting a provider */
export interface MsgDeleteProviderSDKType {
  owner: string;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponse {}
export interface MsgDeleteProviderResponseProtoMsg {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse";
  value: Uint8Array;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseAmino {}
export interface MsgDeleteProviderResponseAminoMsg {
  type: "/akash.provider.v1beta1.MsgDeleteProviderResponse";
  value: MsgDeleteProviderResponseAmino;
}
/** MsgDeleteProviderResponse defines the Msg/DeleteProvider response type. */
export interface MsgDeleteProviderResponseSDKType {}
/** Provider stores owner and host details */
export interface Provider {
  owner: string;
  hostUri: string;
  attributes: Attribute[];
  info: ProviderInfo;
}
export interface ProviderProtoMsg {
  typeUrl: "/akash.provider.v1beta1.Provider";
  value: Uint8Array;
}
/** Provider stores owner and host details */
export interface ProviderAmino {
  owner: string;
  host_uri: string;
  attributes: AttributeAmino[];
  info: ProviderInfoAmino;
}
export interface ProviderAminoMsg {
  type: "/akash.provider.v1beta1.Provider";
  value: ProviderAmino;
}
/** Provider stores owner and host details */
export interface ProviderSDKType {
  owner: string;
  host_uri: string;
  attributes: AttributeSDKType[];
  info: ProviderInfoSDKType;
}
function createBaseProviderInfo(): ProviderInfo {
  return {
    email: "",
    website: ""
  };
}
export const ProviderInfo = {
  typeUrl: "/akash.provider.v1beta1.ProviderInfo",
  is(o: any): o is ProviderInfo {
    return o && (o.$typeUrl === ProviderInfo.typeUrl || typeof o.email === "string" && typeof o.website === "string");
  },
  isSDK(o: any): o is ProviderInfoSDKType {
    return o && (o.$typeUrl === ProviderInfo.typeUrl || typeof o.email === "string" && typeof o.website === "string");
  },
  isAmino(o: any): o is ProviderInfoAmino {
    return o && (o.$typeUrl === ProviderInfo.typeUrl || typeof o.email === "string" && typeof o.website === "string");
  },
  encode(message: ProviderInfo, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    if (message.website !== "") {
      writer.uint32(18).string(message.website);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ProviderInfo {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProviderInfo();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.email = reader.string();
          break;
        case 2:
          message.website = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ProviderInfo>): ProviderInfo {
    const message = createBaseProviderInfo();
    message.email = object.email ?? "";
    message.website = object.website ?? "";
    return message;
  },
  fromAmino(object: ProviderInfoAmino): ProviderInfo {
    const message = createBaseProviderInfo();
    if (object.email !== undefined && object.email !== null) {
      message.email = object.email;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    return message;
  },
  toAmino(message: ProviderInfo): ProviderInfoAmino {
    const obj: any = {};
    obj.email = message.email ?? "";
    obj.website = message.website ?? "";
    return obj;
  },
  fromAminoMsg(object: ProviderInfoAminoMsg): ProviderInfo {
    return ProviderInfo.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderInfoProtoMsg): ProviderInfo {
    return ProviderInfo.decode(message.value);
  },
  toProto(message: ProviderInfo): Uint8Array {
    return ProviderInfo.encode(message).finish();
  },
  toProtoMsg(message: ProviderInfo): ProviderInfoProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.ProviderInfo",
      value: ProviderInfo.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ProviderInfo.typeUrl, ProviderInfo);
function createBaseMsgCreateProvider(): MsgCreateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const MsgCreateProvider = {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
  is(o: any): o is MsgCreateProvider {
    return o && (o.$typeUrl === MsgCreateProvider.typeUrl || typeof o.owner === "string" && typeof o.hostUri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])) && ProviderInfo.is(o.info));
  },
  isSDK(o: any): o is MsgCreateProviderSDKType {
    return o && (o.$typeUrl === MsgCreateProvider.typeUrl || typeof o.owner === "string" && typeof o.host_uri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])) && ProviderInfo.isSDK(o.info));
  },
  isAmino(o: any): o is MsgCreateProviderAmino {
    return o && (o.$typeUrl === MsgCreateProvider.typeUrl || typeof o.owner === "string" && typeof o.host_uri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])) && ProviderInfo.isAmino(o.info));
  },
  encode(message: MsgCreateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateProvider>): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: MsgCreateProviderAmino): MsgCreateProvider {
    const message = createBaseMsgCreateProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.host_uri !== undefined && object.host_uri !== null) {
      message.hostUri = object.host_uri;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: MsgCreateProvider): MsgCreateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.host_uri = message.hostUri ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info) : ProviderInfo.toAmino(ProviderInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderAminoMsg): MsgCreateProvider {
    return MsgCreateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderProtoMsg): MsgCreateProvider {
    return MsgCreateProvider.decode(message.value);
  },
  toProto(message: MsgCreateProvider): Uint8Array {
    return MsgCreateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProvider): MsgCreateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgCreateProvider",
      value: MsgCreateProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateProvider.typeUrl, MsgCreateProvider);
function createBaseMsgCreateProviderResponse(): MsgCreateProviderResponse {
  return {};
}
export const MsgCreateProviderResponse = {
  typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
  is(o: any): o is MsgCreateProviderResponse {
    return o && o.$typeUrl === MsgCreateProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateProviderResponseSDKType {
    return o && o.$typeUrl === MsgCreateProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateProviderResponseAmino {
    return o && o.$typeUrl === MsgCreateProviderResponse.typeUrl;
  },
  encode(_: MsgCreateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgCreateProviderResponse>): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  fromAmino(_: MsgCreateProviderResponseAmino): MsgCreateProviderResponse {
    const message = createBaseMsgCreateProviderResponse();
    return message;
  },
  toAmino(_: MsgCreateProviderResponse): MsgCreateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateProviderResponseAminoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateProviderResponseProtoMsg): MsgCreateProviderResponse {
    return MsgCreateProviderResponse.decode(message.value);
  },
  toProto(message: MsgCreateProviderResponse): Uint8Array {
    return MsgCreateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateProviderResponse): MsgCreateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgCreateProviderResponse",
      value: MsgCreateProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateProviderResponse.typeUrl, MsgCreateProviderResponse);
function createBaseMsgUpdateProvider(): MsgUpdateProvider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const MsgUpdateProvider = {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
  is(o: any): o is MsgUpdateProvider {
    return o && (o.$typeUrl === MsgUpdateProvider.typeUrl || typeof o.owner === "string" && typeof o.hostUri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])) && ProviderInfo.is(o.info));
  },
  isSDK(o: any): o is MsgUpdateProviderSDKType {
    return o && (o.$typeUrl === MsgUpdateProvider.typeUrl || typeof o.owner === "string" && typeof o.host_uri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])) && ProviderInfo.isSDK(o.info));
  },
  isAmino(o: any): o is MsgUpdateProviderAmino {
    return o && (o.$typeUrl === MsgUpdateProvider.typeUrl || typeof o.owner === "string" && typeof o.host_uri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])) && ProviderInfo.isAmino(o.info));
  },
  encode(message: MsgUpdateProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgUpdateProvider>): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: MsgUpdateProviderAmino): MsgUpdateProvider {
    const message = createBaseMsgUpdateProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.host_uri !== undefined && object.host_uri !== null) {
      message.hostUri = object.host_uri;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: MsgUpdateProvider): MsgUpdateProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.host_uri = message.hostUri ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info) : ProviderInfo.toAmino(ProviderInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderAminoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderProtoMsg): MsgUpdateProvider {
    return MsgUpdateProvider.decode(message.value);
  },
  toProto(message: MsgUpdateProvider): Uint8Array {
    return MsgUpdateProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProvider): MsgUpdateProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgUpdateProvider",
      value: MsgUpdateProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateProvider.typeUrl, MsgUpdateProvider);
function createBaseMsgUpdateProviderResponse(): MsgUpdateProviderResponse {
  return {};
}
export const MsgUpdateProviderResponse = {
  typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
  is(o: any): o is MsgUpdateProviderResponse {
    return o && o.$typeUrl === MsgUpdateProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgUpdateProviderResponseSDKType {
    return o && o.$typeUrl === MsgUpdateProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgUpdateProviderResponseAmino {
    return o && o.$typeUrl === MsgUpdateProviderResponse.typeUrl;
  },
  encode(_: MsgUpdateProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgUpdateProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgUpdateProviderResponse>): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  fromAmino(_: MsgUpdateProviderResponseAmino): MsgUpdateProviderResponse {
    const message = createBaseMsgUpdateProviderResponse();
    return message;
  },
  toAmino(_: MsgUpdateProviderResponse): MsgUpdateProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgUpdateProviderResponseAminoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgUpdateProviderResponseProtoMsg): MsgUpdateProviderResponse {
    return MsgUpdateProviderResponse.decode(message.value);
  },
  toProto(message: MsgUpdateProviderResponse): Uint8Array {
    return MsgUpdateProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgUpdateProviderResponse): MsgUpdateProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgUpdateProviderResponse",
      value: MsgUpdateProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgUpdateProviderResponse.typeUrl, MsgUpdateProviderResponse);
function createBaseMsgDeleteProvider(): MsgDeleteProvider {
  return {
    owner: ""
  };
}
export const MsgDeleteProvider = {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
  is(o: any): o is MsgDeleteProvider {
    return o && (o.$typeUrl === MsgDeleteProvider.typeUrl || typeof o.owner === "string");
  },
  isSDK(o: any): o is MsgDeleteProviderSDKType {
    return o && (o.$typeUrl === MsgDeleteProvider.typeUrl || typeof o.owner === "string");
  },
  isAmino(o: any): o is MsgDeleteProviderAmino {
    return o && (o.$typeUrl === MsgDeleteProvider.typeUrl || typeof o.owner === "string");
  },
  encode(message: MsgDeleteProvider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProvider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgDeleteProvider>): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    message.owner = object.owner ?? "";
    return message;
  },
  fromAmino(object: MsgDeleteProviderAmino): MsgDeleteProvider {
    const message = createBaseMsgDeleteProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    return message;
  },
  toAmino(message: MsgDeleteProvider): MsgDeleteProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderAminoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderProtoMsg): MsgDeleteProvider {
    return MsgDeleteProvider.decode(message.value);
  },
  toProto(message: MsgDeleteProvider): Uint8Array {
    return MsgDeleteProvider.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProvider): MsgDeleteProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgDeleteProvider",
      value: MsgDeleteProvider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteProvider.typeUrl, MsgDeleteProvider);
function createBaseMsgDeleteProviderResponse(): MsgDeleteProviderResponse {
  return {};
}
export const MsgDeleteProviderResponse = {
  typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
  is(o: any): o is MsgDeleteProviderResponse {
    return o && o.$typeUrl === MsgDeleteProviderResponse.typeUrl;
  },
  isSDK(o: any): o is MsgDeleteProviderResponseSDKType {
    return o && o.$typeUrl === MsgDeleteProviderResponse.typeUrl;
  },
  isAmino(o: any): o is MsgDeleteProviderResponseAmino {
    return o && o.$typeUrl === MsgDeleteProviderResponse.typeUrl;
  },
  encode(_: MsgDeleteProviderResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgDeleteProviderResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDeleteProviderResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(_: Partial<MsgDeleteProviderResponse>): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  fromAmino(_: MsgDeleteProviderResponseAmino): MsgDeleteProviderResponse {
    const message = createBaseMsgDeleteProviderResponse();
    return message;
  },
  toAmino(_: MsgDeleteProviderResponse): MsgDeleteProviderResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgDeleteProviderResponseAminoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgDeleteProviderResponseProtoMsg): MsgDeleteProviderResponse {
    return MsgDeleteProviderResponse.decode(message.value);
  },
  toProto(message: MsgDeleteProviderResponse): Uint8Array {
    return MsgDeleteProviderResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgDeleteProviderResponse): MsgDeleteProviderResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.MsgDeleteProviderResponse",
      value: MsgDeleteProviderResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgDeleteProviderResponse.typeUrl, MsgDeleteProviderResponse);
function createBaseProvider(): Provider {
  return {
    owner: "",
    hostUri: "",
    attributes: [],
    info: ProviderInfo.fromPartial({})
  };
}
export const Provider = {
  typeUrl: "/akash.provider.v1beta1.Provider",
  is(o: any): o is Provider {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.owner === "string" && typeof o.hostUri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.is(o.attributes[0])) && ProviderInfo.is(o.info));
  },
  isSDK(o: any): o is ProviderSDKType {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.owner === "string" && typeof o.host_uri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isSDK(o.attributes[0])) && ProviderInfo.isSDK(o.info));
  },
  isAmino(o: any): o is ProviderAmino {
    return o && (o.$typeUrl === Provider.typeUrl || typeof o.owner === "string" && typeof o.host_uri === "string" && Array.isArray(o.attributes) && (!o.attributes.length || Attribute.isAmino(o.attributes[0])) && ProviderInfo.isAmino(o.info));
  },
  encode(message: Provider, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.hostUri !== "") {
      writer.uint32(18).string(message.hostUri);
    }
    for (const v of message.attributes) {
      Attribute.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.info !== undefined) {
      ProviderInfo.encode(message.info, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Provider {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseProvider();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.hostUri = reader.string();
          break;
        case 3:
          message.attributes.push(Attribute.decode(reader, reader.uint32()));
          break;
        case 4:
          message.info = ProviderInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Provider>): Provider {
    const message = createBaseProvider();
    message.owner = object.owner ?? "";
    message.hostUri = object.hostUri ?? "";
    message.attributes = object.attributes?.map(e => Attribute.fromPartial(e)) || [];
    message.info = object.info !== undefined && object.info !== null ? ProviderInfo.fromPartial(object.info) : undefined;
    return message;
  },
  fromAmino(object: ProviderAmino): Provider {
    const message = createBaseProvider();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.host_uri !== undefined && object.host_uri !== null) {
      message.hostUri = object.host_uri;
    }
    message.attributes = object.attributes?.map(e => Attribute.fromAmino(e)) || [];
    if (object.info !== undefined && object.info !== null) {
      message.info = ProviderInfo.fromAmino(object.info);
    }
    return message;
  },
  toAmino(message: Provider): ProviderAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.host_uri = message.hostUri ?? "";
    if (message.attributes) {
      obj.attributes = message.attributes.map(e => e ? Attribute.toAmino(e) : undefined);
    } else {
      obj.attributes = message.attributes;
    }
    obj.info = message.info ? ProviderInfo.toAmino(message.info) : ProviderInfo.toAmino(ProviderInfo.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ProviderAminoMsg): Provider {
    return Provider.fromAmino(object.value);
  },
  fromProtoMsg(message: ProviderProtoMsg): Provider {
    return Provider.decode(message.value);
  },
  toProto(message: Provider): Uint8Array {
    return Provider.encode(message).finish();
  },
  toProtoMsg(message: Provider): ProviderProtoMsg {
    return {
      typeUrl: "/akash.provider.v1beta1.Provider",
      value: Provider.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Provider.typeUrl, Provider);