import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** State is an enum which refers to state of deployment */
export enum Certificate_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** valid - CertificateValid denotes state for deployment active */
  valid = 1,
  /** revoked - CertificateRevoked denotes state for deployment closed */
  revoked = 2,
  UNRECOGNIZED = -1,
}
export const Certificate_StateSDKType = Certificate_State;
export const Certificate_StateAmino = Certificate_State;
export function certificate_StateFromJSON(object: any): Certificate_State {
  switch (object) {
    case 0:
    case "invalid":
      return Certificate_State.invalid;
    case 1:
    case "valid":
      return Certificate_State.valid;
    case 2:
    case "revoked":
      return Certificate_State.revoked;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Certificate_State.UNRECOGNIZED;
  }
}
export function certificate_StateToJSON(object: Certificate_State): string {
  switch (object) {
    case Certificate_State.invalid:
      return "invalid";
    case Certificate_State.valid:
      return "valid";
    case Certificate_State.revoked:
      return "revoked";
    case Certificate_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** CertificateID stores owner and sequence number */
export interface CertificateID {
  owner: string;
  serial: string;
}
export interface CertificateIDProtoMsg {
  typeUrl: "/akash.cert.v1beta3.CertificateID";
  value: Uint8Array;
}
/** CertificateID stores owner and sequence number */
export interface CertificateIDAmino {
  owner: string;
  serial: string;
}
export interface CertificateIDAminoMsg {
  type: "/akash.cert.v1beta3.CertificateID";
  value: CertificateIDAmino;
}
/** CertificateID stores owner and sequence number */
export interface CertificateIDSDKType {
  owner: string;
  serial: string;
}
/** Certificate stores state, certificate and it's public key */
export interface Certificate {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
export interface CertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta3.Certificate";
  value: Uint8Array;
}
/** Certificate stores state, certificate and it's public key */
export interface CertificateAmino {
  state: Certificate_State;
  cert: string;
  pubkey: string;
}
export interface CertificateAminoMsg {
  type: "/akash.cert.v1beta3.Certificate";
  value: CertificateAmino;
}
/** Certificate stores state, certificate and it's public key */
export interface CertificateSDKType {
  state: Certificate_State;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilter {
  owner: string;
  serial: string;
  state: string;
}
export interface CertificateFilterProtoMsg {
  typeUrl: "/akash.cert.v1beta3.CertificateFilter";
  value: Uint8Array;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterAmino {
  owner: string;
  serial: string;
  state: string;
}
export interface CertificateFilterAminoMsg {
  type: "/akash.cert.v1beta3.CertificateFilter";
  value: CertificateFilterAmino;
}
/** CertificateFilter defines filters used to filter certificates */
export interface CertificateFilterSDKType {
  owner: string;
  serial: string;
  state: string;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificate {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
export interface MsgCreateCertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate";
  value: Uint8Array;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateAmino {
  owner: string;
  cert: string;
  pubkey: string;
}
export interface MsgCreateCertificateAminoMsg {
  type: "/akash.cert.v1beta3.MsgCreateCertificate";
  value: MsgCreateCertificateAmino;
}
/** MsgCreateCertificate defines an SDK message for creating certificate */
export interface MsgCreateCertificateSDKType {
  owner: string;
  cert: Uint8Array;
  pubkey: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponse {}
export interface MsgCreateCertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificateResponse";
  value: Uint8Array;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseAmino {}
export interface MsgCreateCertificateResponseAminoMsg {
  type: "/akash.cert.v1beta3.MsgCreateCertificateResponse";
  value: MsgCreateCertificateResponseAmino;
}
/** MsgCreateCertificateResponse defines the Msg/CreateCertificate response type. */
export interface MsgCreateCertificateResponseSDKType {}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificate {
  id: CertificateID;
}
export interface MsgRevokeCertificateProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate";
  value: Uint8Array;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateAmino {
  id: CertificateIDAmino;
}
export interface MsgRevokeCertificateAminoMsg {
  type: "/akash.cert.v1beta3.MsgRevokeCertificate";
  value: MsgRevokeCertificateAmino;
}
/** MsgRevokeCertificate defines an SDK message for revoking certificate */
export interface MsgRevokeCertificateSDKType {
  id: CertificateIDSDKType;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponse {}
export interface MsgRevokeCertificateResponseProtoMsg {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificateResponse";
  value: Uint8Array;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseAmino {}
export interface MsgRevokeCertificateResponseAminoMsg {
  type: "/akash.cert.v1beta3.MsgRevokeCertificateResponse";
  value: MsgRevokeCertificateResponseAmino;
}
/** MsgRevokeCertificateResponse defines the Msg/RevokeCertificate response type. */
export interface MsgRevokeCertificateResponseSDKType {}
function createBaseCertificateID(): CertificateID {
  return {
    owner: "",
    serial: ""
  };
}
export const CertificateID = {
  typeUrl: "/akash.cert.v1beta3.CertificateID",
  is(o: any): o is CertificateID {
    return o && (o.$typeUrl === CertificateID.typeUrl || typeof o.owner === "string" && typeof o.serial === "string");
  },
  isSDK(o: any): o is CertificateIDSDKType {
    return o && (o.$typeUrl === CertificateID.typeUrl || typeof o.owner === "string" && typeof o.serial === "string");
  },
  isAmino(o: any): o is CertificateIDAmino {
    return o && (o.$typeUrl === CertificateID.typeUrl || typeof o.owner === "string" && typeof o.serial === "string");
  },
  encode(message: CertificateID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CertificateID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateID();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CertificateID>): CertificateID {
    const message = createBaseCertificateID();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    return message;
  },
  fromAmino(object: CertificateIDAmino): CertificateID {
    const message = createBaseCertificateID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    return message;
  },
  toAmino(message: CertificateID): CertificateIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.serial = message.serial ?? "";
    return obj;
  },
  fromAminoMsg(object: CertificateIDAminoMsg): CertificateID {
    return CertificateID.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateIDProtoMsg): CertificateID {
    return CertificateID.decode(message.value);
  },
  toProto(message: CertificateID): Uint8Array {
    return CertificateID.encode(message).finish();
  },
  toProtoMsg(message: CertificateID): CertificateIDProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.CertificateID",
      value: CertificateID.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CertificateID.typeUrl, CertificateID);
function createBaseCertificate(): Certificate {
  return {
    state: 0,
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
export const Certificate = {
  typeUrl: "/akash.cert.v1beta3.Certificate",
  is(o: any): o is Certificate {
    return o && (o.$typeUrl === Certificate.typeUrl || isSet(o.state) && (o.cert instanceof Uint8Array || typeof o.cert === "string") && (o.pubkey instanceof Uint8Array || typeof o.pubkey === "string"));
  },
  isSDK(o: any): o is CertificateSDKType {
    return o && (o.$typeUrl === Certificate.typeUrl || isSet(o.state) && (o.cert instanceof Uint8Array || typeof o.cert === "string") && (o.pubkey instanceof Uint8Array || typeof o.pubkey === "string"));
  },
  isAmino(o: any): o is CertificateAmino {
    return o && (o.$typeUrl === Certificate.typeUrl || isSet(o.state) && (o.cert instanceof Uint8Array || typeof o.cert === "string") && (o.pubkey instanceof Uint8Array || typeof o.pubkey === "string"));
  },
  encode(message: Certificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.cert.length !== 0) {
      writer.uint32(26).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(34).bytes(message.pubkey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Certificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.cert = reader.bytes();
          break;
        case 4:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Certificate>): Certificate {
    const message = createBaseCertificate();
    message.state = object.state ?? 0;
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: CertificateAmino): Certificate {
    const message = createBaseCertificate();
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },
  toAmino(message: Certificate): CertificateAmino {
    const obj: any = {};
    obj.state = message.state ?? 0;
    obj.cert = message.cert ? base64FromBytes(message.cert) : "";
    obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : "";
    return obj;
  },
  fromAminoMsg(object: CertificateAminoMsg): Certificate {
    return Certificate.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateProtoMsg): Certificate {
    return Certificate.decode(message.value);
  },
  toProto(message: Certificate): Uint8Array {
    return Certificate.encode(message).finish();
  },
  toProtoMsg(message: Certificate): CertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.Certificate",
      value: Certificate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Certificate.typeUrl, Certificate);
function createBaseCertificateFilter(): CertificateFilter {
  return {
    owner: "",
    serial: "",
    state: ""
  };
}
export const CertificateFilter = {
  typeUrl: "/akash.cert.v1beta3.CertificateFilter",
  is(o: any): o is CertificateFilter {
    return o && (o.$typeUrl === CertificateFilter.typeUrl || typeof o.owner === "string" && typeof o.serial === "string" && typeof o.state === "string");
  },
  isSDK(o: any): o is CertificateFilterSDKType {
    return o && (o.$typeUrl === CertificateFilter.typeUrl || typeof o.owner === "string" && typeof o.serial === "string" && typeof o.state === "string");
  },
  isAmino(o: any): o is CertificateFilterAmino {
    return o && (o.$typeUrl === CertificateFilter.typeUrl || typeof o.owner === "string" && typeof o.serial === "string" && typeof o.state === "string");
  },
  encode(message: CertificateFilter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.serial !== "") {
      writer.uint32(18).string(message.serial);
    }
    if (message.state !== "") {
      writer.uint32(26).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): CertificateFilter {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCertificateFilter();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.serial = reader.string();
          break;
        case 3:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<CertificateFilter>): CertificateFilter {
    const message = createBaseCertificateFilter();
    message.owner = object.owner ?? "";
    message.serial = object.serial ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: CertificateFilterAmino): CertificateFilter {
    const message = createBaseCertificateFilter();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.serial !== undefined && object.serial !== null) {
      message.serial = object.serial;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: CertificateFilter): CertificateFilterAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.serial = message.serial ?? "";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: CertificateFilterAminoMsg): CertificateFilter {
    return CertificateFilter.fromAmino(object.value);
  },
  fromProtoMsg(message: CertificateFilterProtoMsg): CertificateFilter {
    return CertificateFilter.decode(message.value);
  },
  toProto(message: CertificateFilter): Uint8Array {
    return CertificateFilter.encode(message).finish();
  },
  toProtoMsg(message: CertificateFilter): CertificateFilterProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.CertificateFilter",
      value: CertificateFilter.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(CertificateFilter.typeUrl, CertificateFilter);
function createBaseMsgCreateCertificate(): MsgCreateCertificate {
  return {
    owner: "",
    cert: new Uint8Array(),
    pubkey: new Uint8Array()
  };
}
export const MsgCreateCertificate = {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
  is(o: any): o is MsgCreateCertificate {
    return o && (o.$typeUrl === MsgCreateCertificate.typeUrl || typeof o.owner === "string" && (o.cert instanceof Uint8Array || typeof o.cert === "string") && (o.pubkey instanceof Uint8Array || typeof o.pubkey === "string"));
  },
  isSDK(o: any): o is MsgCreateCertificateSDKType {
    return o && (o.$typeUrl === MsgCreateCertificate.typeUrl || typeof o.owner === "string" && (o.cert instanceof Uint8Array || typeof o.cert === "string") && (o.pubkey instanceof Uint8Array || typeof o.pubkey === "string"));
  },
  isAmino(o: any): o is MsgCreateCertificateAmino {
    return o && (o.$typeUrl === MsgCreateCertificate.typeUrl || typeof o.owner === "string" && (o.cert instanceof Uint8Array || typeof o.cert === "string") && (o.pubkey instanceof Uint8Array || typeof o.pubkey === "string"));
  },
  encode(message: MsgCreateCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.cert.length !== 0) {
      writer.uint32(18).bytes(message.cert);
    }
    if (message.pubkey.length !== 0) {
      writer.uint32(26).bytes(message.pubkey);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCertificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.cert = reader.bytes();
          break;
        case 3:
          message.pubkey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateCertificate>): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    message.owner = object.owner ?? "";
    message.cert = object.cert ?? new Uint8Array();
    message.pubkey = object.pubkey ?? new Uint8Array();
    return message;
  },
  fromAmino(object: MsgCreateCertificateAmino): MsgCreateCertificate {
    const message = createBaseMsgCreateCertificate();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.cert !== undefined && object.cert !== null) {
      message.cert = bytesFromBase64(object.cert);
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = bytesFromBase64(object.pubkey);
    }
    return message;
  },
  toAmino(message: MsgCreateCertificate): MsgCreateCertificateAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.cert = message.cert ? base64FromBytes(message.cert) : "";
    obj.pubkey = message.pubkey ? base64FromBytes(message.pubkey) : "";
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateAminoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateProtoMsg): MsgCreateCertificate {
    return MsgCreateCertificate.decode(message.value);
  },
  toProto(message: MsgCreateCertificate): Uint8Array {
    return MsgCreateCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificate): MsgCreateCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.MsgCreateCertificate",
      value: MsgCreateCertificate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateCertificate.typeUrl, MsgCreateCertificate);
function createBaseMsgCreateCertificateResponse(): MsgCreateCertificateResponse {
  return {};
}
export const MsgCreateCertificateResponse = {
  typeUrl: "/akash.cert.v1beta3.MsgCreateCertificateResponse",
  is(o: any): o is MsgCreateCertificateResponse {
    return o && o.$typeUrl === MsgCreateCertificateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateCertificateResponseSDKType {
    return o && o.$typeUrl === MsgCreateCertificateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateCertificateResponseAmino {
    return o && o.$typeUrl === MsgCreateCertificateResponse.typeUrl;
  },
  encode(_: MsgCreateCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateCertificateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCertificateResponse();
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
  fromPartial(_: Partial<MsgCreateCertificateResponse>): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  fromAmino(_: MsgCreateCertificateResponseAmino): MsgCreateCertificateResponse {
    const message = createBaseMsgCreateCertificateResponse();
    return message;
  },
  toAmino(_: MsgCreateCertificateResponse): MsgCreateCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateCertificateResponseAminoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateCertificateResponseProtoMsg): MsgCreateCertificateResponse {
    return MsgCreateCertificateResponse.decode(message.value);
  },
  toProto(message: MsgCreateCertificateResponse): Uint8Array {
    return MsgCreateCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateCertificateResponse): MsgCreateCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.MsgCreateCertificateResponse",
      value: MsgCreateCertificateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateCertificateResponse.typeUrl, MsgCreateCertificateResponse);
function createBaseMsgRevokeCertificate(): MsgRevokeCertificate {
  return {
    id: CertificateID.fromPartial({})
  };
}
export const MsgRevokeCertificate = {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
  is(o: any): o is MsgRevokeCertificate {
    return o && (o.$typeUrl === MsgRevokeCertificate.typeUrl || CertificateID.is(o.id));
  },
  isSDK(o: any): o is MsgRevokeCertificateSDKType {
    return o && (o.$typeUrl === MsgRevokeCertificate.typeUrl || CertificateID.isSDK(o.id));
  },
  isAmino(o: any): o is MsgRevokeCertificateAmino {
    return o && (o.$typeUrl === MsgRevokeCertificate.typeUrl || CertificateID.isAmino(o.id));
  },
  encode(message: MsgRevokeCertificate, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== undefined) {
      CertificateID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeCertificate {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = CertificateID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgRevokeCertificate>): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    message.id = object.id !== undefined && object.id !== null ? CertificateID.fromPartial(object.id) : undefined;
    return message;
  },
  fromAmino(object: MsgRevokeCertificateAmino): MsgRevokeCertificate {
    const message = createBaseMsgRevokeCertificate();
    if (object.id !== undefined && object.id !== null) {
      message.id = CertificateID.fromAmino(object.id);
    }
    return message;
  },
  toAmino(message: MsgRevokeCertificate): MsgRevokeCertificateAmino {
    const obj: any = {};
    obj.id = message.id ? CertificateID.toAmino(message.id) : CertificateID.toAmino(CertificateID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateAminoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateProtoMsg): MsgRevokeCertificate {
    return MsgRevokeCertificate.decode(message.value);
  },
  toProto(message: MsgRevokeCertificate): Uint8Array {
    return MsgRevokeCertificate.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificate): MsgRevokeCertificateProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificate",
      value: MsgRevokeCertificate.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeCertificate.typeUrl, MsgRevokeCertificate);
function createBaseMsgRevokeCertificateResponse(): MsgRevokeCertificateResponse {
  return {};
}
export const MsgRevokeCertificateResponse = {
  typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificateResponse",
  is(o: any): o is MsgRevokeCertificateResponse {
    return o && o.$typeUrl === MsgRevokeCertificateResponse.typeUrl;
  },
  isSDK(o: any): o is MsgRevokeCertificateResponseSDKType {
    return o && o.$typeUrl === MsgRevokeCertificateResponse.typeUrl;
  },
  isAmino(o: any): o is MsgRevokeCertificateResponseAmino {
    return o && o.$typeUrl === MsgRevokeCertificateResponse.typeUrl;
  },
  encode(_: MsgRevokeCertificateResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgRevokeCertificateResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRevokeCertificateResponse();
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
  fromPartial(_: Partial<MsgRevokeCertificateResponse>): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  fromAmino(_: MsgRevokeCertificateResponseAmino): MsgRevokeCertificateResponse {
    const message = createBaseMsgRevokeCertificateResponse();
    return message;
  },
  toAmino(_: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgRevokeCertificateResponseAminoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgRevokeCertificateResponseProtoMsg): MsgRevokeCertificateResponse {
    return MsgRevokeCertificateResponse.decode(message.value);
  },
  toProto(message: MsgRevokeCertificateResponse): Uint8Array {
    return MsgRevokeCertificateResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgRevokeCertificateResponse): MsgRevokeCertificateResponseProtoMsg {
    return {
      typeUrl: "/akash.cert.v1beta3.MsgRevokeCertificateResponse",
      value: MsgRevokeCertificateResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgRevokeCertificateResponse.typeUrl, MsgRevokeCertificateResponse);