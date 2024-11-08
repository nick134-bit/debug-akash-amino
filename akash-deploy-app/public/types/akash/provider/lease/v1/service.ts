import { LeaseID, LeaseIDAmino, LeaseIDSDKType } from "../../../market/v1beta4/lease";
import { Group, GroupAmino, GroupSDKType } from "../../../manifest/v2beta2/group";
import { BinaryReader, BinaryWriter } from "../../../../binary";
import { GlobalDecoderRegistry } from "../../../../registry";
import { bytesFromBase64, base64FromBytes } from "../../../../helpers";
/** LeaseServiceStatus */
export interface LeaseServiceStatus {
  available: number;
  total: number;
  uris: string[];
  observedGeneration: bigint;
  replicas: number;
  updatedReplicas: number;
  readyReplicas: number;
  availableReplicas: number;
}
export interface LeaseServiceStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.LeaseServiceStatus";
  value: Uint8Array;
}
/** LeaseServiceStatus */
export interface LeaseServiceStatusAmino {
  available?: number;
  total?: number;
  uris?: string[];
  observed_generation?: string;
  replicas?: number;
  updated_replicas?: number;
  ready_replicas?: number;
  available_replicas?: number;
}
export interface LeaseServiceStatusAminoMsg {
  type: "/akash.provider.lease.v1.LeaseServiceStatus";
  value: LeaseServiceStatusAmino;
}
/** LeaseServiceStatus */
export interface LeaseServiceStatusSDKType {
  available: number;
  total: number;
  uris: string[];
  observed_generation: bigint;
  replicas: number;
  updated_replicas: number;
  ready_replicas: number;
  available_replicas: number;
}
/** LeaseIPStatus */
export interface LeaseIPStatus {
  port: number;
  externalPort: number;
  protocol: string;
  ip: string;
}
export interface LeaseIPStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.LeaseIPStatus";
  value: Uint8Array;
}
/** LeaseIPStatus */
export interface LeaseIPStatusAmino {
  port: number;
  external_port: number;
  protocol: string;
  ip: string;
}
export interface LeaseIPStatusAminoMsg {
  type: "/akash.provider.lease.v1.LeaseIPStatus";
  value: LeaseIPStatusAmino;
}
/** LeaseIPStatus */
export interface LeaseIPStatusSDKType {
  port: number;
  external_port: number;
  protocol: string;
  ip: string;
}
/** ForwarderPortStatus */
export interface ForwarderPortStatus {
  host: string;
  port: number;
  externalPort: number;
  proto: string;
  name: string;
}
export interface ForwarderPortStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ForwarderPortStatus";
  value: Uint8Array;
}
/** ForwarderPortStatus */
export interface ForwarderPortStatusAmino {
  host: string;
  port: number;
  external_port: number;
  proto: string;
  name: string;
}
export interface ForwarderPortStatusAminoMsg {
  type: "/akash.provider.lease.v1.ForwarderPortStatus";
  value: ForwarderPortStatusAmino;
}
/** ForwarderPortStatus */
export interface ForwarderPortStatusSDKType {
  host: string;
  port: number;
  external_port: number;
  proto: string;
  name: string;
}
/** ServiceStatus */
export interface ServiceStatus {
  name: string;
  status: LeaseServiceStatus;
  ports: ForwarderPortStatus[];
  ips: LeaseIPStatus[];
}
export interface ServiceStatusProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceStatus";
  value: Uint8Array;
}
/** ServiceStatus */
export interface ServiceStatusAmino {
  name: string;
  status: LeaseServiceStatusAmino;
  ports: ForwarderPortStatusAmino[];
  ips: LeaseIPStatusAmino[];
}
export interface ServiceStatusAminoMsg {
  type: "/akash.provider.lease.v1.ServiceStatus";
  value: ServiceStatusAmino;
}
/** ServiceStatus */
export interface ServiceStatusSDKType {
  name: string;
  status: LeaseServiceStatusSDKType;
  ports: ForwarderPortStatusSDKType[];
  ips: LeaseIPStatusSDKType[];
}
/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequest {
  leaseId: LeaseID;
  manifest: Group[];
}
export interface SendManifestRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.SendManifestRequest";
  value: Uint8Array;
}
/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequestAmino {
  lease_id: LeaseIDAmino;
  manifest: GroupAmino[];
}
export interface SendManifestRequestAminoMsg {
  type: "/akash.provider.lease.v1.SendManifestRequest";
  value: SendManifestRequestAmino;
}
/** SendManifestRequest is request type for the SendManifest Providers RPC method */
export interface SendManifestRequestSDKType {
  lease_id: LeaseIDSDKType;
  manifest: GroupSDKType[];
}
/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponse {}
export interface SendManifestResponseProtoMsg {
  typeUrl: "/akash.provider.lease.v1.SendManifestResponse";
  value: Uint8Array;
}
/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponseAmino {}
export interface SendManifestResponseAminoMsg {
  type: "/akash.provider.lease.v1.SendManifestResponse";
  value: SendManifestResponseAmino;
}
/** SendManifestResponse is response type for the SendManifest Providers RPC method */
export interface SendManifestResponseSDKType {}
/** ServiceLogsRequest */
export interface ServiceLogsRequest {
  leaseId: LeaseID;
  services: string[];
}
export interface ServiceLogsRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsRequest";
  value: Uint8Array;
}
/** ServiceLogsRequest */
export interface ServiceLogsRequestAmino {
  lease_id: LeaseIDAmino;
  services: string[];
}
export interface ServiceLogsRequestAminoMsg {
  type: "/akash.provider.lease.v1.ServiceLogsRequest";
  value: ServiceLogsRequestAmino;
}
/** ServiceLogsRequest */
export interface ServiceLogsRequestSDKType {
  lease_id: LeaseIDSDKType;
  services: string[];
}
/** ServiceLogs */
export interface ServiceLogs {
  name: string;
  logs: Uint8Array;
}
export interface ServiceLogsProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceLogs";
  value: Uint8Array;
}
/** ServiceLogs */
export interface ServiceLogsAmino {
  name: string;
  logs: string;
}
export interface ServiceLogsAminoMsg {
  type: "/akash.provider.lease.v1.ServiceLogs";
  value: ServiceLogsAmino;
}
/** ServiceLogs */
export interface ServiceLogsSDKType {
  name: string;
  logs: Uint8Array;
}
/** ServiceLogsResponse */
export interface ServiceLogsResponse {
  services: ServiceLogs[];
}
export interface ServiceLogsResponseProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsResponse";
  value: Uint8Array;
}
/** ServiceLogsResponse */
export interface ServiceLogsResponseAmino {
  services: ServiceLogsAmino[];
}
export interface ServiceLogsResponseAminoMsg {
  type: "/akash.provider.lease.v1.ServiceLogsResponse";
  value: ServiceLogsResponseAmino;
}
/** ServiceLogsResponse */
export interface ServiceLogsResponseSDKType {
  services: ServiceLogsSDKType[];
}
/** ShellRequest */
export interface ShellRequest {
  leaseId: LeaseID;
}
export interface ShellRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ShellRequest";
  value: Uint8Array;
}
/** ShellRequest */
export interface ShellRequestAmino {
  lease_id: LeaseIDAmino;
}
export interface ShellRequestAminoMsg {
  type: "/akash.provider.lease.v1.ShellRequest";
  value: ShellRequestAmino;
}
/** ShellRequest */
export interface ShellRequestSDKType {
  lease_id: LeaseIDSDKType;
}
/** ServiceStatusRequest */
export interface ServiceStatusRequest {
  leaseId: LeaseID;
  services: string[];
}
export interface ServiceStatusRequestProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusRequest";
  value: Uint8Array;
}
/** ServiceStatusRequest */
export interface ServiceStatusRequestAmino {
  lease_id: LeaseIDAmino;
  services: string[];
}
export interface ServiceStatusRequestAminoMsg {
  type: "/akash.provider.lease.v1.ServiceStatusRequest";
  value: ServiceStatusRequestAmino;
}
/** ServiceStatusRequest */
export interface ServiceStatusRequestSDKType {
  lease_id: LeaseIDSDKType;
  services: string[];
}
/** ServiceStatusResponse */
export interface ServiceStatusResponse {
  services: ServiceStatus[];
}
export interface ServiceStatusResponseProtoMsg {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusResponse";
  value: Uint8Array;
}
/** ServiceStatusResponse */
export interface ServiceStatusResponseAmino {
  services: ServiceStatusAmino[];
}
export interface ServiceStatusResponseAminoMsg {
  type: "/akash.provider.lease.v1.ServiceStatusResponse";
  value: ServiceStatusResponseAmino;
}
/** ServiceStatusResponse */
export interface ServiceStatusResponseSDKType {
  services: ServiceStatusSDKType[];
}
function createBaseLeaseServiceStatus(): LeaseServiceStatus {
  return {
    available: 0,
    total: 0,
    uris: [],
    observedGeneration: BigInt(0),
    replicas: 0,
    updatedReplicas: 0,
    readyReplicas: 0,
    availableReplicas: 0
  };
}
export const LeaseServiceStatus = {
  typeUrl: "/akash.provider.lease.v1.LeaseServiceStatus",
  is(o: any): o is LeaseServiceStatus {
    return o && (o.$typeUrl === LeaseServiceStatus.typeUrl || typeof o.available === "number" && typeof o.total === "number" && Array.isArray(o.uris) && (!o.uris.length || typeof o.uris[0] === "string") && typeof o.observedGeneration === "bigint" && typeof o.replicas === "number" && typeof o.updatedReplicas === "number" && typeof o.readyReplicas === "number" && typeof o.availableReplicas === "number");
  },
  isSDK(o: any): o is LeaseServiceStatusSDKType {
    return o && (o.$typeUrl === LeaseServiceStatus.typeUrl || typeof o.available === "number" && typeof o.total === "number" && Array.isArray(o.uris) && (!o.uris.length || typeof o.uris[0] === "string") && typeof o.observed_generation === "bigint" && typeof o.replicas === "number" && typeof o.updated_replicas === "number" && typeof o.ready_replicas === "number" && typeof o.available_replicas === "number");
  },
  isAmino(o: any): o is LeaseServiceStatusAmino {
    return o && (o.$typeUrl === LeaseServiceStatus.typeUrl || typeof o.available === "number" && typeof o.total === "number" && Array.isArray(o.uris) && (!o.uris.length || typeof o.uris[0] === "string") && typeof o.observed_generation === "bigint" && typeof o.replicas === "number" && typeof o.updated_replicas === "number" && typeof o.ready_replicas === "number" && typeof o.available_replicas === "number");
  },
  encode(message: LeaseServiceStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.available !== 0) {
      writer.uint32(8).int32(message.available);
    }
    if (message.total !== 0) {
      writer.uint32(16).int32(message.total);
    }
    for (const v of message.uris) {
      writer.uint32(26).string(v!);
    }
    if (message.observedGeneration !== BigInt(0)) {
      writer.uint32(32).int64(message.observedGeneration);
    }
    if (message.replicas !== 0) {
      writer.uint32(40).int32(message.replicas);
    }
    if (message.updatedReplicas !== 0) {
      writer.uint32(48).int32(message.updatedReplicas);
    }
    if (message.readyReplicas !== 0) {
      writer.uint32(56).int32(message.readyReplicas);
    }
    if (message.availableReplicas !== 0) {
      writer.uint32(64).int32(message.availableReplicas);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseServiceStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseServiceStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.available = reader.int32();
          break;
        case 2:
          message.total = reader.int32();
          break;
        case 3:
          message.uris.push(reader.string());
          break;
        case 4:
          message.observedGeneration = reader.int64();
          break;
        case 5:
          message.replicas = reader.int32();
          break;
        case 6:
          message.updatedReplicas = reader.int32();
          break;
        case 7:
          message.readyReplicas = reader.int32();
          break;
        case 8:
          message.availableReplicas = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LeaseServiceStatus>): LeaseServiceStatus {
    const message = createBaseLeaseServiceStatus();
    message.available = object.available ?? 0;
    message.total = object.total ?? 0;
    message.uris = object.uris?.map(e => e) || [];
    message.observedGeneration = object.observedGeneration !== undefined && object.observedGeneration !== null ? BigInt(object.observedGeneration.toString()) : BigInt(0);
    message.replicas = object.replicas ?? 0;
    message.updatedReplicas = object.updatedReplicas ?? 0;
    message.readyReplicas = object.readyReplicas ?? 0;
    message.availableReplicas = object.availableReplicas ?? 0;
    return message;
  },
  fromAmino(object: LeaseServiceStatusAmino): LeaseServiceStatus {
    const message = createBaseLeaseServiceStatus();
    if (object.available !== undefined && object.available !== null) {
      message.available = object.available;
    }
    if (object.total !== undefined && object.total !== null) {
      message.total = object.total;
    }
    message.uris = object.uris?.map(e => e) || [];
    if (object.observed_generation !== undefined && object.observed_generation !== null) {
      message.observedGeneration = BigInt(object.observed_generation);
    }
    if (object.replicas !== undefined && object.replicas !== null) {
      message.replicas = object.replicas;
    }
    if (object.updated_replicas !== undefined && object.updated_replicas !== null) {
      message.updatedReplicas = object.updated_replicas;
    }
    if (object.ready_replicas !== undefined && object.ready_replicas !== null) {
      message.readyReplicas = object.ready_replicas;
    }
    if (object.available_replicas !== undefined && object.available_replicas !== null) {
      message.availableReplicas = object.available_replicas;
    }
    return message;
  },
  toAmino(message: LeaseServiceStatus): LeaseServiceStatusAmino {
    const obj: any = {};
    obj.available = message.available === 0 ? undefined : message.available;
    obj.total = message.total === 0 ? undefined : message.total;
    if (message.uris) {
      obj.uris = message.uris.map(e => e);
    } else {
      obj.uris = message.uris;
    }
    obj.observed_generation = message.observedGeneration !== BigInt(0) ? message.observedGeneration?.toString() : undefined;
    obj.replicas = message.replicas === 0 ? undefined : message.replicas;
    obj.updated_replicas = message.updatedReplicas === 0 ? undefined : message.updatedReplicas;
    obj.ready_replicas = message.readyReplicas === 0 ? undefined : message.readyReplicas;
    obj.available_replicas = message.availableReplicas === 0 ? undefined : message.availableReplicas;
    return obj;
  },
  fromAminoMsg(object: LeaseServiceStatusAminoMsg): LeaseServiceStatus {
    return LeaseServiceStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseServiceStatusProtoMsg): LeaseServiceStatus {
    return LeaseServiceStatus.decode(message.value);
  },
  toProto(message: LeaseServiceStatus): Uint8Array {
    return LeaseServiceStatus.encode(message).finish();
  },
  toProtoMsg(message: LeaseServiceStatus): LeaseServiceStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.LeaseServiceStatus",
      value: LeaseServiceStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LeaseServiceStatus.typeUrl, LeaseServiceStatus);
function createBaseLeaseIPStatus(): LeaseIPStatus {
  return {
    port: 0,
    externalPort: 0,
    protocol: "",
    ip: ""
  };
}
export const LeaseIPStatus = {
  typeUrl: "/akash.provider.lease.v1.LeaseIPStatus",
  is(o: any): o is LeaseIPStatus {
    return o && (o.$typeUrl === LeaseIPStatus.typeUrl || typeof o.port === "number" && typeof o.externalPort === "number" && typeof o.protocol === "string" && typeof o.ip === "string");
  },
  isSDK(o: any): o is LeaseIPStatusSDKType {
    return o && (o.$typeUrl === LeaseIPStatus.typeUrl || typeof o.port === "number" && typeof o.external_port === "number" && typeof o.protocol === "string" && typeof o.ip === "string");
  },
  isAmino(o: any): o is LeaseIPStatusAmino {
    return o && (o.$typeUrl === LeaseIPStatus.typeUrl || typeof o.port === "number" && typeof o.external_port === "number" && typeof o.protocol === "string" && typeof o.ip === "string");
  },
  encode(message: LeaseIPStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.port !== 0) {
      writer.uint32(8).uint32(message.port);
    }
    if (message.externalPort !== 0) {
      writer.uint32(16).uint32(message.externalPort);
    }
    if (message.protocol !== "") {
      writer.uint32(26).string(message.protocol);
    }
    if (message.ip !== "") {
      writer.uint32(34).string(message.ip);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): LeaseIPStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseLeaseIPStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.port = reader.uint32();
          break;
        case 2:
          message.externalPort = reader.uint32();
          break;
        case 3:
          message.protocol = reader.string();
          break;
        case 4:
          message.ip = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<LeaseIPStatus>): LeaseIPStatus {
    const message = createBaseLeaseIPStatus();
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.protocol = object.protocol ?? "";
    message.ip = object.ip ?? "";
    return message;
  },
  fromAmino(object: LeaseIPStatusAmino): LeaseIPStatus {
    const message = createBaseLeaseIPStatus();
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.external_port !== undefined && object.external_port !== null) {
      message.externalPort = object.external_port;
    }
    if (object.protocol !== undefined && object.protocol !== null) {
      message.protocol = object.protocol;
    }
    if (object.ip !== undefined && object.ip !== null) {
      message.ip = object.ip;
    }
    return message;
  },
  toAmino(message: LeaseIPStatus): LeaseIPStatusAmino {
    const obj: any = {};
    obj.port = message.port ?? 0;
    obj.external_port = message.externalPort ?? 0;
    obj.protocol = message.protocol ?? "";
    obj.ip = message.ip ?? "";
    return obj;
  },
  fromAminoMsg(object: LeaseIPStatusAminoMsg): LeaseIPStatus {
    return LeaseIPStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: LeaseIPStatusProtoMsg): LeaseIPStatus {
    return LeaseIPStatus.decode(message.value);
  },
  toProto(message: LeaseIPStatus): Uint8Array {
    return LeaseIPStatus.encode(message).finish();
  },
  toProtoMsg(message: LeaseIPStatus): LeaseIPStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.LeaseIPStatus",
      value: LeaseIPStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(LeaseIPStatus.typeUrl, LeaseIPStatus);
function createBaseForwarderPortStatus(): ForwarderPortStatus {
  return {
    host: "",
    port: 0,
    externalPort: 0,
    proto: "",
    name: ""
  };
}
export const ForwarderPortStatus = {
  typeUrl: "/akash.provider.lease.v1.ForwarderPortStatus",
  is(o: any): o is ForwarderPortStatus {
    return o && (o.$typeUrl === ForwarderPortStatus.typeUrl || typeof o.host === "string" && typeof o.port === "number" && typeof o.externalPort === "number" && typeof o.proto === "string" && typeof o.name === "string");
  },
  isSDK(o: any): o is ForwarderPortStatusSDKType {
    return o && (o.$typeUrl === ForwarderPortStatus.typeUrl || typeof o.host === "string" && typeof o.port === "number" && typeof o.external_port === "number" && typeof o.proto === "string" && typeof o.name === "string");
  },
  isAmino(o: any): o is ForwarderPortStatusAmino {
    return o && (o.$typeUrl === ForwarderPortStatus.typeUrl || typeof o.host === "string" && typeof o.port === "number" && typeof o.external_port === "number" && typeof o.proto === "string" && typeof o.name === "string");
  },
  encode(message: ForwarderPortStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.host !== "") {
      writer.uint32(10).string(message.host);
    }
    if (message.port !== 0) {
      writer.uint32(16).uint32(message.port);
    }
    if (message.externalPort !== 0) {
      writer.uint32(24).uint32(message.externalPort);
    }
    if (message.proto !== "") {
      writer.uint32(34).string(message.proto);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ForwarderPortStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseForwarderPortStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.host = reader.string();
          break;
        case 2:
          message.port = reader.uint32();
          break;
        case 3:
          message.externalPort = reader.uint32();
          break;
        case 4:
          message.proto = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ForwarderPortStatus>): ForwarderPortStatus {
    const message = createBaseForwarderPortStatus();
    message.host = object.host ?? "";
    message.port = object.port ?? 0;
    message.externalPort = object.externalPort ?? 0;
    message.proto = object.proto ?? "";
    message.name = object.name ?? "";
    return message;
  },
  fromAmino(object: ForwarderPortStatusAmino): ForwarderPortStatus {
    const message = createBaseForwarderPortStatus();
    if (object.host !== undefined && object.host !== null) {
      message.host = object.host;
    }
    if (object.port !== undefined && object.port !== null) {
      message.port = object.port;
    }
    if (object.external_port !== undefined && object.external_port !== null) {
      message.externalPort = object.external_port;
    }
    if (object.proto !== undefined && object.proto !== null) {
      message.proto = object.proto;
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    return message;
  },
  toAmino(message: ForwarderPortStatus): ForwarderPortStatusAmino {
    const obj: any = {};
    obj.host = message.host ?? "";
    obj.port = message.port ?? 0;
    obj.external_port = message.externalPort ?? 0;
    obj.proto = message.proto ?? "";
    obj.name = message.name ?? "";
    return obj;
  },
  fromAminoMsg(object: ForwarderPortStatusAminoMsg): ForwarderPortStatus {
    return ForwarderPortStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ForwarderPortStatusProtoMsg): ForwarderPortStatus {
    return ForwarderPortStatus.decode(message.value);
  },
  toProto(message: ForwarderPortStatus): Uint8Array {
    return ForwarderPortStatus.encode(message).finish();
  },
  toProtoMsg(message: ForwarderPortStatus): ForwarderPortStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ForwarderPortStatus",
      value: ForwarderPortStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ForwarderPortStatus.typeUrl, ForwarderPortStatus);
function createBaseServiceStatus(): ServiceStatus {
  return {
    name: "",
    status: LeaseServiceStatus.fromPartial({}),
    ports: [],
    ips: []
  };
}
export const ServiceStatus = {
  typeUrl: "/akash.provider.lease.v1.ServiceStatus",
  is(o: any): o is ServiceStatus {
    return o && (o.$typeUrl === ServiceStatus.typeUrl || typeof o.name === "string" && LeaseServiceStatus.is(o.status) && Array.isArray(o.ports) && (!o.ports.length || ForwarderPortStatus.is(o.ports[0])) && Array.isArray(o.ips) && (!o.ips.length || LeaseIPStatus.is(o.ips[0])));
  },
  isSDK(o: any): o is ServiceStatusSDKType {
    return o && (o.$typeUrl === ServiceStatus.typeUrl || typeof o.name === "string" && LeaseServiceStatus.isSDK(o.status) && Array.isArray(o.ports) && (!o.ports.length || ForwarderPortStatus.isSDK(o.ports[0])) && Array.isArray(o.ips) && (!o.ips.length || LeaseIPStatus.isSDK(o.ips[0])));
  },
  isAmino(o: any): o is ServiceStatusAmino {
    return o && (o.$typeUrl === ServiceStatus.typeUrl || typeof o.name === "string" && LeaseServiceStatus.isAmino(o.status) && Array.isArray(o.ports) && (!o.ports.length || ForwarderPortStatus.isAmino(o.ports[0])) && Array.isArray(o.ips) && (!o.ips.length || LeaseIPStatus.isAmino(o.ips[0])));
  },
  encode(message: ServiceStatus, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.status !== undefined) {
      LeaseServiceStatus.encode(message.status, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.ports) {
      ForwarderPortStatus.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.ips) {
      LeaseIPStatus.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceStatus {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.status = LeaseServiceStatus.decode(reader, reader.uint32());
          break;
        case 3:
          message.ports.push(ForwarderPortStatus.decode(reader, reader.uint32()));
          break;
        case 4:
          message.ips.push(LeaseIPStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceStatus>): ServiceStatus {
    const message = createBaseServiceStatus();
    message.name = object.name ?? "";
    message.status = object.status !== undefined && object.status !== null ? LeaseServiceStatus.fromPartial(object.status) : undefined;
    message.ports = object.ports?.map(e => ForwarderPortStatus.fromPartial(e)) || [];
    message.ips = object.ips?.map(e => LeaseIPStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceStatusAmino): ServiceStatus {
    const message = createBaseServiceStatus();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = LeaseServiceStatus.fromAmino(object.status);
    }
    message.ports = object.ports?.map(e => ForwarderPortStatus.fromAmino(e)) || [];
    message.ips = object.ips?.map(e => LeaseIPStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceStatus): ServiceStatusAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.status = message.status ? LeaseServiceStatus.toAmino(message.status) : LeaseServiceStatus.toAmino(LeaseServiceStatus.fromPartial({}));
    if (message.ports) {
      obj.ports = message.ports.map(e => e ? ForwarderPortStatus.toAmino(e) : undefined);
    } else {
      obj.ports = message.ports;
    }
    if (message.ips) {
      obj.ips = message.ips.map(e => e ? LeaseIPStatus.toAmino(e) : undefined);
    } else {
      obj.ips = message.ips;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceStatusAminoMsg): ServiceStatus {
    return ServiceStatus.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceStatusProtoMsg): ServiceStatus {
    return ServiceStatus.decode(message.value);
  },
  toProto(message: ServiceStatus): Uint8Array {
    return ServiceStatus.encode(message).finish();
  },
  toProtoMsg(message: ServiceStatus): ServiceStatusProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceStatus",
      value: ServiceStatus.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceStatus.typeUrl, ServiceStatus);
function createBaseSendManifestRequest(): SendManifestRequest {
  return {
    leaseId: LeaseID.fromPartial({}),
    manifest: []
  };
}
export const SendManifestRequest = {
  typeUrl: "/akash.provider.lease.v1.SendManifestRequest",
  is(o: any): o is SendManifestRequest {
    return o && (o.$typeUrl === SendManifestRequest.typeUrl || LeaseID.is(o.leaseId) && Array.isArray(o.manifest) && (!o.manifest.length || Group.is(o.manifest[0])));
  },
  isSDK(o: any): o is SendManifestRequestSDKType {
    return o && (o.$typeUrl === SendManifestRequest.typeUrl || LeaseID.isSDK(o.lease_id) && Array.isArray(o.manifest) && (!o.manifest.length || Group.isSDK(o.manifest[0])));
  },
  isAmino(o: any): o is SendManifestRequestAmino {
    return o && (o.$typeUrl === SendManifestRequest.typeUrl || LeaseID.isAmino(o.lease_id) && Array.isArray(o.manifest) && (!o.manifest.length || Group.isAmino(o.manifest[0])));
  },
  encode(message: SendManifestRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.manifest) {
      Group.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SendManifestRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManifestRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.manifest.push(Group.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<SendManifestRequest>): SendManifestRequest {
    const message = createBaseSendManifestRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.manifest = object.manifest?.map(e => Group.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: SendManifestRequestAmino): SendManifestRequest {
    const message = createBaseSendManifestRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    message.manifest = object.manifest?.map(e => Group.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: SendManifestRequest): SendManifestRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    if (message.manifest) {
      obj.manifest = message.manifest.map(e => e ? Group.toAmino(e) : undefined);
    } else {
      obj.manifest = message.manifest;
    }
    return obj;
  },
  fromAminoMsg(object: SendManifestRequestAminoMsg): SendManifestRequest {
    return SendManifestRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: SendManifestRequestProtoMsg): SendManifestRequest {
    return SendManifestRequest.decode(message.value);
  },
  toProto(message: SendManifestRequest): Uint8Array {
    return SendManifestRequest.encode(message).finish();
  },
  toProtoMsg(message: SendManifestRequest): SendManifestRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.SendManifestRequest",
      value: SendManifestRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SendManifestRequest.typeUrl, SendManifestRequest);
function createBaseSendManifestResponse(): SendManifestResponse {
  return {};
}
export const SendManifestResponse = {
  typeUrl: "/akash.provider.lease.v1.SendManifestResponse",
  is(o: any): o is SendManifestResponse {
    return o && o.$typeUrl === SendManifestResponse.typeUrl;
  },
  isSDK(o: any): o is SendManifestResponseSDKType {
    return o && o.$typeUrl === SendManifestResponse.typeUrl;
  },
  isAmino(o: any): o is SendManifestResponseAmino {
    return o && o.$typeUrl === SendManifestResponse.typeUrl;
  },
  encode(_: SendManifestResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): SendManifestResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseSendManifestResponse();
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
  fromPartial(_: Partial<SendManifestResponse>): SendManifestResponse {
    const message = createBaseSendManifestResponse();
    return message;
  },
  fromAmino(_: SendManifestResponseAmino): SendManifestResponse {
    const message = createBaseSendManifestResponse();
    return message;
  },
  toAmino(_: SendManifestResponse): SendManifestResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: SendManifestResponseAminoMsg): SendManifestResponse {
    return SendManifestResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: SendManifestResponseProtoMsg): SendManifestResponse {
    return SendManifestResponse.decode(message.value);
  },
  toProto(message: SendManifestResponse): Uint8Array {
    return SendManifestResponse.encode(message).finish();
  },
  toProtoMsg(message: SendManifestResponse): SendManifestResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.SendManifestResponse",
      value: SendManifestResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(SendManifestResponse.typeUrl, SendManifestResponse);
function createBaseServiceLogsRequest(): ServiceLogsRequest {
  return {
    leaseId: LeaseID.fromPartial({}),
    services: []
  };
}
export const ServiceLogsRequest = {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsRequest",
  is(o: any): o is ServiceLogsRequest {
    return o && (o.$typeUrl === ServiceLogsRequest.typeUrl || LeaseID.is(o.leaseId) && Array.isArray(o.services) && (!o.services.length || typeof o.services[0] === "string"));
  },
  isSDK(o: any): o is ServiceLogsRequestSDKType {
    return o && (o.$typeUrl === ServiceLogsRequest.typeUrl || LeaseID.isSDK(o.lease_id) && Array.isArray(o.services) && (!o.services.length || typeof o.services[0] === "string"));
  },
  isAmino(o: any): o is ServiceLogsRequestAmino {
    return o && (o.$typeUrl === ServiceLogsRequest.typeUrl || LeaseID.isAmino(o.lease_id) && Array.isArray(o.services) && (!o.services.length || typeof o.services[0] === "string"));
  },
  encode(message: ServiceLogsRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.services) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceLogsRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLogsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.services.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceLogsRequest>): ServiceLogsRequest {
    const message = createBaseServiceLogsRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceLogsRequestAmino): ServiceLogsRequest {
    const message = createBaseServiceLogsRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceLogsRequest): ServiceLogsRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    if (message.services) {
      obj.services = message.services.map(e => e);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceLogsRequestAminoMsg): ServiceLogsRequest {
    return ServiceLogsRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceLogsRequestProtoMsg): ServiceLogsRequest {
    return ServiceLogsRequest.decode(message.value);
  },
  toProto(message: ServiceLogsRequest): Uint8Array {
    return ServiceLogsRequest.encode(message).finish();
  },
  toProtoMsg(message: ServiceLogsRequest): ServiceLogsRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceLogsRequest",
      value: ServiceLogsRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceLogsRequest.typeUrl, ServiceLogsRequest);
function createBaseServiceLogs(): ServiceLogs {
  return {
    name: "",
    logs: new Uint8Array()
  };
}
export const ServiceLogs = {
  typeUrl: "/akash.provider.lease.v1.ServiceLogs",
  is(o: any): o is ServiceLogs {
    return o && (o.$typeUrl === ServiceLogs.typeUrl || typeof o.name === "string" && (o.logs instanceof Uint8Array || typeof o.logs === "string"));
  },
  isSDK(o: any): o is ServiceLogsSDKType {
    return o && (o.$typeUrl === ServiceLogs.typeUrl || typeof o.name === "string" && (o.logs instanceof Uint8Array || typeof o.logs === "string"));
  },
  isAmino(o: any): o is ServiceLogsAmino {
    return o && (o.$typeUrl === ServiceLogs.typeUrl || typeof o.name === "string" && (o.logs instanceof Uint8Array || typeof o.logs === "string"));
  },
  encode(message: ServiceLogs, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.logs.length !== 0) {
      writer.uint32(18).bytes(message.logs);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceLogs {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLogs();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.logs = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceLogs>): ServiceLogs {
    const message = createBaseServiceLogs();
    message.name = object.name ?? "";
    message.logs = object.logs ?? new Uint8Array();
    return message;
  },
  fromAmino(object: ServiceLogsAmino): ServiceLogs {
    const message = createBaseServiceLogs();
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    }
    if (object.logs !== undefined && object.logs !== null) {
      message.logs = bytesFromBase64(object.logs);
    }
    return message;
  },
  toAmino(message: ServiceLogs): ServiceLogsAmino {
    const obj: any = {};
    obj.name = message.name ?? "";
    obj.logs = message.logs ? base64FromBytes(message.logs) : "";
    return obj;
  },
  fromAminoMsg(object: ServiceLogsAminoMsg): ServiceLogs {
    return ServiceLogs.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceLogsProtoMsg): ServiceLogs {
    return ServiceLogs.decode(message.value);
  },
  toProto(message: ServiceLogs): Uint8Array {
    return ServiceLogs.encode(message).finish();
  },
  toProtoMsg(message: ServiceLogs): ServiceLogsProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceLogs",
      value: ServiceLogs.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceLogs.typeUrl, ServiceLogs);
function createBaseServiceLogsResponse(): ServiceLogsResponse {
  return {
    services: []
  };
}
export const ServiceLogsResponse = {
  typeUrl: "/akash.provider.lease.v1.ServiceLogsResponse",
  is(o: any): o is ServiceLogsResponse {
    return o && (o.$typeUrl === ServiceLogsResponse.typeUrl || Array.isArray(o.services) && (!o.services.length || ServiceLogs.is(o.services[0])));
  },
  isSDK(o: any): o is ServiceLogsResponseSDKType {
    return o && (o.$typeUrl === ServiceLogsResponse.typeUrl || Array.isArray(o.services) && (!o.services.length || ServiceLogs.isSDK(o.services[0])));
  },
  isAmino(o: any): o is ServiceLogsResponseAmino {
    return o && (o.$typeUrl === ServiceLogsResponse.typeUrl || Array.isArray(o.services) && (!o.services.length || ServiceLogs.isAmino(o.services[0])));
  },
  encode(message: ServiceLogsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      ServiceLogs.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceLogsResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceLogsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(ServiceLogs.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceLogsResponse>): ServiceLogsResponse {
    const message = createBaseServiceLogsResponse();
    message.services = object.services?.map(e => ServiceLogs.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceLogsResponseAmino): ServiceLogsResponse {
    const message = createBaseServiceLogsResponse();
    message.services = object.services?.map(e => ServiceLogs.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceLogsResponse): ServiceLogsResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ServiceLogs.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceLogsResponseAminoMsg): ServiceLogsResponse {
    return ServiceLogsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceLogsResponseProtoMsg): ServiceLogsResponse {
    return ServiceLogsResponse.decode(message.value);
  },
  toProto(message: ServiceLogsResponse): Uint8Array {
    return ServiceLogsResponse.encode(message).finish();
  },
  toProtoMsg(message: ServiceLogsResponse): ServiceLogsResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceLogsResponse",
      value: ServiceLogsResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceLogsResponse.typeUrl, ServiceLogsResponse);
function createBaseShellRequest(): ShellRequest {
  return {
    leaseId: LeaseID.fromPartial({})
  };
}
export const ShellRequest = {
  typeUrl: "/akash.provider.lease.v1.ShellRequest",
  is(o: any): o is ShellRequest {
    return o && (o.$typeUrl === ShellRequest.typeUrl || LeaseID.is(o.leaseId));
  },
  isSDK(o: any): o is ShellRequestSDKType {
    return o && (o.$typeUrl === ShellRequest.typeUrl || LeaseID.isSDK(o.lease_id));
  },
  isAmino(o: any): o is ShellRequestAmino {
    return o && (o.$typeUrl === ShellRequest.typeUrl || LeaseID.isAmino(o.lease_id));
  },
  encode(message: ShellRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ShellRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseShellRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ShellRequest>): ShellRequest {
    const message = createBaseShellRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    return message;
  },
  fromAmino(object: ShellRequestAmino): ShellRequest {
    const message = createBaseShellRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    return message;
  },
  toAmino(message: ShellRequest): ShellRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: ShellRequestAminoMsg): ShellRequest {
    return ShellRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ShellRequestProtoMsg): ShellRequest {
    return ShellRequest.decode(message.value);
  },
  toProto(message: ShellRequest): Uint8Array {
    return ShellRequest.encode(message).finish();
  },
  toProtoMsg(message: ShellRequest): ShellRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ShellRequest",
      value: ShellRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ShellRequest.typeUrl, ShellRequest);
function createBaseServiceStatusRequest(): ServiceStatusRequest {
  return {
    leaseId: LeaseID.fromPartial({}),
    services: []
  };
}
export const ServiceStatusRequest = {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusRequest",
  is(o: any): o is ServiceStatusRequest {
    return o && (o.$typeUrl === ServiceStatusRequest.typeUrl || LeaseID.is(o.leaseId) && Array.isArray(o.services) && (!o.services.length || typeof o.services[0] === "string"));
  },
  isSDK(o: any): o is ServiceStatusRequestSDKType {
    return o && (o.$typeUrl === ServiceStatusRequest.typeUrl || LeaseID.isSDK(o.lease_id) && Array.isArray(o.services) && (!o.services.length || typeof o.services[0] === "string"));
  },
  isAmino(o: any): o is ServiceStatusRequestAmino {
    return o && (o.$typeUrl === ServiceStatusRequest.typeUrl || LeaseID.isAmino(o.lease_id) && Array.isArray(o.services) && (!o.services.length || typeof o.services[0] === "string"));
  },
  encode(message: ServiceStatusRequest, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.leaseId !== undefined) {
      LeaseID.encode(message.leaseId, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.services) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceStatusRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.leaseId = LeaseID.decode(reader, reader.uint32());
          break;
        case 2:
          message.services.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceStatusRequest>): ServiceStatusRequest {
    const message = createBaseServiceStatusRequest();
    message.leaseId = object.leaseId !== undefined && object.leaseId !== null ? LeaseID.fromPartial(object.leaseId) : undefined;
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  fromAmino(object: ServiceStatusRequestAmino): ServiceStatusRequest {
    const message = createBaseServiceStatusRequest();
    if (object.lease_id !== undefined && object.lease_id !== null) {
      message.leaseId = LeaseID.fromAmino(object.lease_id);
    }
    message.services = object.services?.map(e => e) || [];
    return message;
  },
  toAmino(message: ServiceStatusRequest): ServiceStatusRequestAmino {
    const obj: any = {};
    obj.lease_id = message.leaseId ? LeaseID.toAmino(message.leaseId) : LeaseID.toAmino(LeaseID.fromPartial({}));
    if (message.services) {
      obj.services = message.services.map(e => e);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceStatusRequestAminoMsg): ServiceStatusRequest {
    return ServiceStatusRequest.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceStatusRequestProtoMsg): ServiceStatusRequest {
    return ServiceStatusRequest.decode(message.value);
  },
  toProto(message: ServiceStatusRequest): Uint8Array {
    return ServiceStatusRequest.encode(message).finish();
  },
  toProtoMsg(message: ServiceStatusRequest): ServiceStatusRequestProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceStatusRequest",
      value: ServiceStatusRequest.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceStatusRequest.typeUrl, ServiceStatusRequest);
function createBaseServiceStatusResponse(): ServiceStatusResponse {
  return {
    services: []
  };
}
export const ServiceStatusResponse = {
  typeUrl: "/akash.provider.lease.v1.ServiceStatusResponse",
  is(o: any): o is ServiceStatusResponse {
    return o && (o.$typeUrl === ServiceStatusResponse.typeUrl || Array.isArray(o.services) && (!o.services.length || ServiceStatus.is(o.services[0])));
  },
  isSDK(o: any): o is ServiceStatusResponseSDKType {
    return o && (o.$typeUrl === ServiceStatusResponse.typeUrl || Array.isArray(o.services) && (!o.services.length || ServiceStatus.isSDK(o.services[0])));
  },
  isAmino(o: any): o is ServiceStatusResponseAmino {
    return o && (o.$typeUrl === ServiceStatusResponse.typeUrl || Array.isArray(o.services) && (!o.services.length || ServiceStatus.isAmino(o.services[0])));
  },
  encode(message: ServiceStatusResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.services) {
      ServiceStatus.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ServiceStatusResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServiceStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.services.push(ServiceStatus.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ServiceStatusResponse>): ServiceStatusResponse {
    const message = createBaseServiceStatusResponse();
    message.services = object.services?.map(e => ServiceStatus.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: ServiceStatusResponseAmino): ServiceStatusResponse {
    const message = createBaseServiceStatusResponse();
    message.services = object.services?.map(e => ServiceStatus.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: ServiceStatusResponse): ServiceStatusResponseAmino {
    const obj: any = {};
    if (message.services) {
      obj.services = message.services.map(e => e ? ServiceStatus.toAmino(e) : undefined);
    } else {
      obj.services = message.services;
    }
    return obj;
  },
  fromAminoMsg(object: ServiceStatusResponseAminoMsg): ServiceStatusResponse {
    return ServiceStatusResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: ServiceStatusResponseProtoMsg): ServiceStatusResponse {
    return ServiceStatusResponse.decode(message.value);
  },
  toProto(message: ServiceStatusResponse): Uint8Array {
    return ServiceStatusResponse.encode(message).finish();
  },
  toProtoMsg(message: ServiceStatusResponse): ServiceStatusResponseProtoMsg {
    return {
      typeUrl: "/akash.provider.lease.v1.ServiceStatusResponse",
      value: ServiceStatusResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ServiceStatusResponse.typeUrl, ServiceStatusResponse);