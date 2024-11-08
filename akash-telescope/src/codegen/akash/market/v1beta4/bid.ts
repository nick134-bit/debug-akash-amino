import { Resources, ResourcesAmino, ResourcesSDKType } from "../../base/v1beta3/resources";
import { OrderID, OrderIDAmino, OrderIDSDKType } from "./order";
import { DecCoin, DecCoinAmino, DecCoinSDKType, Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { GlobalDecoderRegistry } from "../../../registry";
import { isSet } from "../../../helpers";
/** State is an enum which refers to state of bid */
export enum Bid_State {
  /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
  invalid = 0,
  /** open - BidOpen denotes state for bid open */
  open = 1,
  /** active - BidMatched denotes state for bid open */
  active = 2,
  /** lost - BidLost denotes state for bid lost */
  lost = 3,
  /** closed - BidClosed denotes state for bid closed */
  closed = 4,
  UNRECOGNIZED = -1,
}
export const Bid_StateSDKType = Bid_State;
export const Bid_StateAmino = Bid_State;
export function bid_StateFromJSON(object: any): Bid_State {
  switch (object) {
    case 0:
    case "invalid":
      return Bid_State.invalid;
    case 1:
    case "open":
      return Bid_State.open;
    case 2:
    case "active":
      return Bid_State.active;
    case 3:
    case "lost":
      return Bid_State.lost;
    case 4:
    case "closed":
      return Bid_State.closed;
    case -1:
    case "UNRECOGNIZED":
    default:
      return Bid_State.UNRECOGNIZED;
  }
}
export function bid_StateToJSON(object: Bid_State): string {
  switch (object) {
    case Bid_State.invalid:
      return "invalid";
    case Bid_State.open:
      return "open";
    case Bid_State.active:
      return "active";
    case Bid_State.lost:
      return "lost";
    case Bid_State.closed:
      return "closed";
    case Bid_State.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment
 */
export interface ResourceOffer {
  resources: Resources;
  count: number;
}
export interface ResourceOfferProtoMsg {
  typeUrl: "/akash.market.v1beta4.ResourceOffer";
  value: Uint8Array;
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment
 */
export interface ResourceOfferAmino {
  resources: ResourcesAmino;
  count: number;
}
export interface ResourceOfferAminoMsg {
  type: "/akash.market.v1beta4.ResourceOffer";
  value: ResourceOfferAmino;
}
/**
 * ResourceOffer describes resources that provider is offering
 * for deployment
 */
export interface ResourceOfferSDKType {
  resources: ResourcesSDKType;
  count: number;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBid {
  order: OrderID;
  provider: string;
  price: DecCoin;
  deposit: Coin;
  resourcesOffer: ResourceOffer[];
}
export interface MsgCreateBidProtoMsg {
  typeUrl: "/akash.market.v1beta4.MsgCreateBid";
  value: Uint8Array;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidAmino {
  order: OrderIDAmino;
  provider: string;
  price: DecCoinAmino;
  deposit: CoinAmino;
  resources_offer: ResourceOfferAmino[];
}
export interface MsgCreateBidAminoMsg {
  type: "/akash.market.v1beta4.MsgCreateBid";
  value: MsgCreateBidAmino;
}
/** MsgCreateBid defines an SDK message for creating Bid */
export interface MsgCreateBidSDKType {
  order: OrderIDSDKType;
  provider: string;
  price: DecCoinSDKType;
  deposit: CoinSDKType;
  resources_offer: ResourceOfferSDKType[];
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponse {}
export interface MsgCreateBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta4.MsgCreateBidResponse";
  value: Uint8Array;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseAmino {}
export interface MsgCreateBidResponseAminoMsg {
  type: "/akash.market.v1beta4.MsgCreateBidResponse";
  value: MsgCreateBidResponseAmino;
}
/** MsgCreateBidResponse defines the Msg/CreateBid response type. */
export interface MsgCreateBidResponseSDKType {}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBid {
  bidId: BidID;
}
export interface MsgCloseBidProtoMsg {
  typeUrl: "/akash.market.v1beta4.MsgCloseBid";
  value: Uint8Array;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidAmino {
  bid_id: BidIDAmino;
}
export interface MsgCloseBidAminoMsg {
  type: "/akash.market.v1beta4.MsgCloseBid";
  value: MsgCloseBidAmino;
}
/** MsgCloseBid defines an SDK message for closing bid */
export interface MsgCloseBidSDKType {
  bid_id: BidIDSDKType;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponse {}
export interface MsgCloseBidResponseProtoMsg {
  typeUrl: "/akash.market.v1beta4.MsgCloseBidResponse";
  value: Uint8Array;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseAmino {}
export interface MsgCloseBidResponseAminoMsg {
  type: "/akash.market.v1beta4.MsgCloseBidResponse";
  value: MsgCloseBidResponseAmino;
}
/** MsgCloseBidResponse defines the Msg/CloseBid response type. */
export interface MsgCloseBidResponseSDKType {}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidID {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface BidIDProtoMsg {
  typeUrl: "/akash.market.v1beta4.BidID";
  value: Uint8Array;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
}
export interface BidIDAminoMsg {
  type: "/akash.market.v1beta4.BidID";
  value: BidIDAmino;
}
/**
 * BidID stores owner and all other seq numbers
 * A successful bid becomes a Lease(ID).
 */
export interface BidIDSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
}
/** Bid stores BidID, state of bid and price */
export interface Bid {
  bidId: BidID;
  state: Bid_State;
  price: DecCoin;
  createdAt: bigint;
  resourcesOffer: ResourceOffer[];
}
export interface BidProtoMsg {
  typeUrl: "/akash.market.v1beta4.Bid";
  value: Uint8Array;
}
/** Bid stores BidID, state of bid and price */
export interface BidAmino {
  bid_id: BidIDAmino;
  state: Bid_State;
  price: DecCoinAmino;
  created_at?: string;
  resources_offer: ResourceOfferAmino[];
}
export interface BidAminoMsg {
  type: "/akash.market.v1beta4.Bid";
  value: BidAmino;
}
/** Bid stores BidID, state of bid and price */
export interface BidSDKType {
  bid_id: BidIDSDKType;
  state: Bid_State;
  price: DecCoinSDKType;
  created_at: bigint;
  resources_offer: ResourceOfferSDKType[];
}
/** BidFilters defines flags for bid list filter */
export interface BidFilters {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface BidFiltersProtoMsg {
  typeUrl: "/akash.market.v1beta4.BidFilters";
  value: Uint8Array;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersAmino {
  owner: string;
  dseq: string;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
export interface BidFiltersAminoMsg {
  type: "/akash.market.v1beta4.BidFilters";
  value: BidFiltersAmino;
}
/** BidFilters defines flags for bid list filter */
export interface BidFiltersSDKType {
  owner: string;
  dseq: bigint;
  gseq: number;
  oseq: number;
  provider: string;
  state: string;
}
function createBaseResourceOffer(): ResourceOffer {
  return {
    resources: Resources.fromPartial({}),
    count: 0
  };
}
export const ResourceOffer = {
  typeUrl: "/akash.market.v1beta4.ResourceOffer",
  is(o: any): o is ResourceOffer {
    return o && (o.$typeUrl === ResourceOffer.typeUrl || Resources.is(o.resources) && typeof o.count === "number");
  },
  isSDK(o: any): o is ResourceOfferSDKType {
    return o && (o.$typeUrl === ResourceOffer.typeUrl || Resources.isSDK(o.resources) && typeof o.count === "number");
  },
  isAmino(o: any): o is ResourceOfferAmino {
    return o && (o.$typeUrl === ResourceOffer.typeUrl || Resources.isAmino(o.resources) && typeof o.count === "number");
  },
  encode(message: ResourceOffer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.resources !== undefined) {
      Resources.encode(message.resources, writer.uint32(10).fork()).ldelim();
    }
    if (message.count !== 0) {
      writer.uint32(16).uint32(message.count);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): ResourceOffer {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseResourceOffer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.resources = Resources.decode(reader, reader.uint32());
          break;
        case 2:
          message.count = reader.uint32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<ResourceOffer>): ResourceOffer {
    const message = createBaseResourceOffer();
    message.resources = object.resources !== undefined && object.resources !== null ? Resources.fromPartial(object.resources) : undefined;
    message.count = object.count ?? 0;
    return message;
  },
  fromAmino(object: ResourceOfferAmino): ResourceOffer {
    const message = createBaseResourceOffer();
    if (object.resources !== undefined && object.resources !== null) {
      message.resources = Resources.fromAmino(object.resources);
    }
    if (object.count !== undefined && object.count !== null) {
      message.count = object.count;
    }
    return message;
  },
  toAmino(message: ResourceOffer): ResourceOfferAmino {
    const obj: any = {};
    obj.resources = message.resources ? Resources.toAmino(message.resources) : Resources.toAmino(Resources.fromPartial({}));
    obj.count = message.count ?? 0;
    return obj;
  },
  fromAminoMsg(object: ResourceOfferAminoMsg): ResourceOffer {
    return ResourceOffer.fromAmino(object.value);
  },
  fromProtoMsg(message: ResourceOfferProtoMsg): ResourceOffer {
    return ResourceOffer.decode(message.value);
  },
  toProto(message: ResourceOffer): Uint8Array {
    return ResourceOffer.encode(message).finish();
  },
  toProtoMsg(message: ResourceOffer): ResourceOfferProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.ResourceOffer",
      value: ResourceOffer.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(ResourceOffer.typeUrl, ResourceOffer);
function createBaseMsgCreateBid(): MsgCreateBid {
  return {
    order: OrderID.fromPartial({}),
    provider: "",
    price: DecCoin.fromPartial({}),
    deposit: Coin.fromPartial({}),
    resourcesOffer: []
  };
}
export const MsgCreateBid = {
  typeUrl: "/akash.market.v1beta4.MsgCreateBid",
  is(o: any): o is MsgCreateBid {
    return o && (o.$typeUrl === MsgCreateBid.typeUrl || OrderID.is(o.order) && typeof o.provider === "string" && DecCoin.is(o.price) && Coin.is(o.deposit) && Array.isArray(o.resourcesOffer) && (!o.resourcesOffer.length || ResourceOffer.is(o.resourcesOffer[0])));
  },
  isSDK(o: any): o is MsgCreateBidSDKType {
    return o && (o.$typeUrl === MsgCreateBid.typeUrl || OrderID.isSDK(o.order) && typeof o.provider === "string" && DecCoin.isSDK(o.price) && Coin.isSDK(o.deposit) && Array.isArray(o.resources_offer) && (!o.resources_offer.length || ResourceOffer.isSDK(o.resources_offer[0])));
  },
  isAmino(o: any): o is MsgCreateBidAmino {
    return o && (o.$typeUrl === MsgCreateBid.typeUrl || OrderID.isAmino(o.order) && typeof o.provider === "string" && DecCoin.isAmino(o.price) && Coin.isAmino(o.deposit) && Array.isArray(o.resources_offer) && (!o.resources_offer.length || ResourceOffer.isAmino(o.resources_offer[0])));
  },
  encode(message: MsgCreateBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.order !== undefined) {
      OrderID.encode(message.order, writer.uint32(10).fork()).ldelim();
    }
    if (message.provider !== "") {
      writer.uint32(18).string(message.provider);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.deposit !== undefined) {
      Coin.encode(message.deposit, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.order = OrderID.decode(reader, reader.uint32());
          break;
        case 2:
          message.provider = reader.string();
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.deposit = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCreateBid>): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    message.order = object.order !== undefined && object.order !== null ? OrderID.fromPartial(object.order) : undefined;
    message.provider = object.provider ?? "";
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.deposit = object.deposit !== undefined && object.deposit !== null ? Coin.fromPartial(object.deposit) : undefined;
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: MsgCreateBidAmino): MsgCreateBid {
    const message = createBaseMsgCreateBid();
    if (object.order !== undefined && object.order !== null) {
      message.order = OrderID.fromAmino(object.order);
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    if (object.deposit !== undefined && object.deposit !== null) {
      message.deposit = Coin.fromAmino(object.deposit);
    }
    message.resourcesOffer = object.resources_offer?.map(e => ResourceOffer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: MsgCreateBid): MsgCreateBidAmino {
    const obj: any = {};
    obj.order = message.order ? OrderID.toAmino(message.order) : OrderID.toAmino(OrderID.fromPartial({}));
    obj.provider = message.provider ?? "";
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.deposit = message.deposit ? Coin.toAmino(message.deposit) : Coin.toAmino(Coin.fromPartial({}));
    if (message.resourcesOffer) {
      obj.resources_offer = message.resourcesOffer.map(e => e ? ResourceOffer.toAmino(e) : undefined);
    } else {
      obj.resources_offer = message.resourcesOffer;
    }
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidAminoMsg): MsgCreateBid {
    return MsgCreateBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBidProtoMsg): MsgCreateBid {
    return MsgCreateBid.decode(message.value);
  },
  toProto(message: MsgCreateBid): Uint8Array {
    return MsgCreateBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBid): MsgCreateBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.MsgCreateBid",
      value: MsgCreateBid.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBid.typeUrl, MsgCreateBid);
function createBaseMsgCreateBidResponse(): MsgCreateBidResponse {
  return {};
}
export const MsgCreateBidResponse = {
  typeUrl: "/akash.market.v1beta4.MsgCreateBidResponse",
  is(o: any): o is MsgCreateBidResponse {
    return o && o.$typeUrl === MsgCreateBidResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCreateBidResponseSDKType {
    return o && o.$typeUrl === MsgCreateBidResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCreateBidResponseAmino {
    return o && o.$typeUrl === MsgCreateBidResponse.typeUrl;
  },
  encode(_: MsgCreateBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCreateBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateBidResponse();
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
  fromPartial(_: Partial<MsgCreateBidResponse>): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  fromAmino(_: MsgCreateBidResponseAmino): MsgCreateBidResponse {
    const message = createBaseMsgCreateBidResponse();
    return message;
  },
  toAmino(_: MsgCreateBidResponse): MsgCreateBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCreateBidResponseAminoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCreateBidResponseProtoMsg): MsgCreateBidResponse {
    return MsgCreateBidResponse.decode(message.value);
  },
  toProto(message: MsgCreateBidResponse): Uint8Array {
    return MsgCreateBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCreateBidResponse): MsgCreateBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.MsgCreateBidResponse",
      value: MsgCreateBidResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCreateBidResponse.typeUrl, MsgCreateBidResponse);
function createBaseMsgCloseBid(): MsgCloseBid {
  return {
    bidId: BidID.fromPartial({})
  };
}
export const MsgCloseBid = {
  typeUrl: "/akash.market.v1beta4.MsgCloseBid",
  is(o: any): o is MsgCloseBid {
    return o && (o.$typeUrl === MsgCloseBid.typeUrl || BidID.is(o.bidId));
  },
  isSDK(o: any): o is MsgCloseBidSDKType {
    return o && (o.$typeUrl === MsgCloseBid.typeUrl || BidID.isSDK(o.bid_id));
  },
  isAmino(o: any): o is MsgCloseBidAmino {
    return o && (o.$typeUrl === MsgCloseBid.typeUrl || BidID.isAmino(o.bid_id));
  },
  encode(message: MsgCloseBid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseBid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<MsgCloseBid>): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    return message;
  },
  fromAmino(object: MsgCloseBidAmino): MsgCloseBid {
    const message = createBaseMsgCloseBid();
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bidId = BidID.fromAmino(object.bid_id);
    }
    return message;
  },
  toAmino(message: MsgCloseBid): MsgCloseBidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidAminoMsg): MsgCloseBid {
    return MsgCloseBid.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBidProtoMsg): MsgCloseBid {
    return MsgCloseBid.decode(message.value);
  },
  toProto(message: MsgCloseBid): Uint8Array {
    return MsgCloseBid.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBid): MsgCloseBidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.MsgCloseBid",
      value: MsgCloseBid.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCloseBid.typeUrl, MsgCloseBid);
function createBaseMsgCloseBidResponse(): MsgCloseBidResponse {
  return {};
}
export const MsgCloseBidResponse = {
  typeUrl: "/akash.market.v1beta4.MsgCloseBidResponse",
  is(o: any): o is MsgCloseBidResponse {
    return o && o.$typeUrl === MsgCloseBidResponse.typeUrl;
  },
  isSDK(o: any): o is MsgCloseBidResponseSDKType {
    return o && o.$typeUrl === MsgCloseBidResponse.typeUrl;
  },
  isAmino(o: any): o is MsgCloseBidResponseAmino {
    return o && o.$typeUrl === MsgCloseBidResponse.typeUrl;
  },
  encode(_: MsgCloseBidResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): MsgCloseBidResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCloseBidResponse();
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
  fromPartial(_: Partial<MsgCloseBidResponse>): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  fromAmino(_: MsgCloseBidResponseAmino): MsgCloseBidResponse {
    const message = createBaseMsgCloseBidResponse();
    return message;
  },
  toAmino(_: MsgCloseBidResponse): MsgCloseBidResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgCloseBidResponseAminoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgCloseBidResponseProtoMsg): MsgCloseBidResponse {
    return MsgCloseBidResponse.decode(message.value);
  },
  toProto(message: MsgCloseBidResponse): Uint8Array {
    return MsgCloseBidResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgCloseBidResponse): MsgCloseBidResponseProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.MsgCloseBidResponse",
      value: MsgCloseBidResponse.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(MsgCloseBidResponse.typeUrl, MsgCloseBidResponse);
function createBaseBidID(): BidID {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: ""
  };
}
export const BidID = {
  typeUrl: "/akash.market.v1beta4.BidID",
  is(o: any): o is BidID {
    return o && (o.$typeUrl === BidID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number" && typeof o.oseq === "number" && typeof o.provider === "string");
  },
  isSDK(o: any): o is BidIDSDKType {
    return o && (o.$typeUrl === BidID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number" && typeof o.oseq === "number" && typeof o.provider === "string");
  },
  isAmino(o: any): o is BidIDAmino {
    return o && (o.$typeUrl === BidID.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number" && typeof o.oseq === "number" && typeof o.provider === "string");
  },
  encode(message: BidID, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidID {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidID();
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
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BidID>): BidID {
    const message = createBaseBidID();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    return message;
  },
  fromAmino(object: BidIDAmino): BidID {
    const message = createBaseBidID();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    return message;
  },
  toAmino(message: BidID): BidIDAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    return obj;
  },
  fromAminoMsg(object: BidIDAminoMsg): BidID {
    return BidID.fromAmino(object.value);
  },
  fromProtoMsg(message: BidIDProtoMsg): BidID {
    return BidID.decode(message.value);
  },
  toProto(message: BidID): Uint8Array {
    return BidID.encode(message).finish();
  },
  toProtoMsg(message: BidID): BidIDProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.BidID",
      value: BidID.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BidID.typeUrl, BidID);
function createBaseBid(): Bid {
  return {
    bidId: BidID.fromPartial({}),
    state: 0,
    price: DecCoin.fromPartial({}),
    createdAt: BigInt(0),
    resourcesOffer: []
  };
}
export const Bid = {
  typeUrl: "/akash.market.v1beta4.Bid",
  is(o: any): o is Bid {
    return o && (o.$typeUrl === Bid.typeUrl || BidID.is(o.bidId) && isSet(o.state) && DecCoin.is(o.price) && typeof o.createdAt === "bigint" && Array.isArray(o.resourcesOffer) && (!o.resourcesOffer.length || ResourceOffer.is(o.resourcesOffer[0])));
  },
  isSDK(o: any): o is BidSDKType {
    return o && (o.$typeUrl === Bid.typeUrl || BidID.isSDK(o.bid_id) && isSet(o.state) && DecCoin.isSDK(o.price) && typeof o.created_at === "bigint" && Array.isArray(o.resources_offer) && (!o.resources_offer.length || ResourceOffer.isSDK(o.resources_offer[0])));
  },
  isAmino(o: any): o is BidAmino {
    return o && (o.$typeUrl === Bid.typeUrl || BidID.isAmino(o.bid_id) && isSet(o.state) && DecCoin.isAmino(o.price) && typeof o.created_at === "bigint" && Array.isArray(o.resources_offer) && (!o.resources_offer.length || ResourceOffer.isAmino(o.resources_offer[0])));
  },
  encode(message: Bid, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.bidId !== undefined) {
      BidID.encode(message.bidId, writer.uint32(10).fork()).ldelim();
    }
    if (message.state !== 0) {
      writer.uint32(16).int32(message.state);
    }
    if (message.price !== undefined) {
      DecCoin.encode(message.price, writer.uint32(26).fork()).ldelim();
    }
    if (message.createdAt !== BigInt(0)) {
      writer.uint32(32).int64(message.createdAt);
    }
    for (const v of message.resourcesOffer) {
      ResourceOffer.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Bid {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBid();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.bidId = BidID.decode(reader, reader.uint32());
          break;
        case 2:
          message.state = (reader.int32() as any);
          break;
        case 3:
          message.price = DecCoin.decode(reader, reader.uint32());
          break;
        case 4:
          message.createdAt = reader.int64();
          break;
        case 5:
          message.resourcesOffer.push(ResourceOffer.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Bid>): Bid {
    const message = createBaseBid();
    message.bidId = object.bidId !== undefined && object.bidId !== null ? BidID.fromPartial(object.bidId) : undefined;
    message.state = object.state ?? 0;
    message.price = object.price !== undefined && object.price !== null ? DecCoin.fromPartial(object.price) : undefined;
    message.createdAt = object.createdAt !== undefined && object.createdAt !== null ? BigInt(object.createdAt.toString()) : BigInt(0);
    message.resourcesOffer = object.resourcesOffer?.map(e => ResourceOffer.fromPartial(e)) || [];
    return message;
  },
  fromAmino(object: BidAmino): Bid {
    const message = createBaseBid();
    if (object.bid_id !== undefined && object.bid_id !== null) {
      message.bidId = BidID.fromAmino(object.bid_id);
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = DecCoin.fromAmino(object.price);
    }
    if (object.created_at !== undefined && object.created_at !== null) {
      message.createdAt = BigInt(object.created_at);
    }
    message.resourcesOffer = object.resources_offer?.map(e => ResourceOffer.fromAmino(e)) || [];
    return message;
  },
  toAmino(message: Bid): BidAmino {
    const obj: any = {};
    obj.bid_id = message.bidId ? BidID.toAmino(message.bidId) : BidID.toAmino(BidID.fromPartial({}));
    obj.state = message.state ?? 0;
    obj.price = message.price ? DecCoin.toAmino(message.price) : DecCoin.toAmino(DecCoin.fromPartial({}));
    obj.created_at = message.createdAt !== BigInt(0) ? message.createdAt?.toString() : undefined;
    if (message.resourcesOffer) {
      obj.resources_offer = message.resourcesOffer.map(e => e ? ResourceOffer.toAmino(e) : undefined);
    } else {
      obj.resources_offer = message.resourcesOffer;
    }
    return obj;
  },
  fromAminoMsg(object: BidAminoMsg): Bid {
    return Bid.fromAmino(object.value);
  },
  fromProtoMsg(message: BidProtoMsg): Bid {
    return Bid.decode(message.value);
  },
  toProto(message: Bid): Uint8Array {
    return Bid.encode(message).finish();
  },
  toProtoMsg(message: Bid): BidProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.Bid",
      value: Bid.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Bid.typeUrl, Bid);
function createBaseBidFilters(): BidFilters {
  return {
    owner: "",
    dseq: BigInt(0),
    gseq: 0,
    oseq: 0,
    provider: "",
    state: ""
  };
}
export const BidFilters = {
  typeUrl: "/akash.market.v1beta4.BidFilters",
  is(o: any): o is BidFilters {
    return o && (o.$typeUrl === BidFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number" && typeof o.oseq === "number" && typeof o.provider === "string" && typeof o.state === "string");
  },
  isSDK(o: any): o is BidFiltersSDKType {
    return o && (o.$typeUrl === BidFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number" && typeof o.oseq === "number" && typeof o.provider === "string" && typeof o.state === "string");
  },
  isAmino(o: any): o is BidFiltersAmino {
    return o && (o.$typeUrl === BidFilters.typeUrl || typeof o.owner === "string" && typeof o.dseq === "bigint" && typeof o.gseq === "number" && typeof o.oseq === "number" && typeof o.provider === "string" && typeof o.state === "string");
  },
  encode(message: BidFilters, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    if (message.dseq !== BigInt(0)) {
      writer.uint32(16).uint64(message.dseq);
    }
    if (message.gseq !== 0) {
      writer.uint32(24).uint32(message.gseq);
    }
    if (message.oseq !== 0) {
      writer.uint32(32).uint32(message.oseq);
    }
    if (message.provider !== "") {
      writer.uint32(42).string(message.provider);
    }
    if (message.state !== "") {
      writer.uint32(50).string(message.state);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): BidFilters {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBidFilters();
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
        case 4:
          message.oseq = reader.uint32();
          break;
        case 5:
          message.provider = reader.string();
          break;
        case 6:
          message.state = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<BidFilters>): BidFilters {
    const message = createBaseBidFilters();
    message.owner = object.owner ?? "";
    message.dseq = object.dseq !== undefined && object.dseq !== null ? BigInt(object.dseq.toString()) : BigInt(0);
    message.gseq = object.gseq ?? 0;
    message.oseq = object.oseq ?? 0;
    message.provider = object.provider ?? "";
    message.state = object.state ?? "";
    return message;
  },
  fromAmino(object: BidFiltersAmino): BidFilters {
    const message = createBaseBidFilters();
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    }
    if (object.dseq !== undefined && object.dseq !== null) {
      message.dseq = BigInt(object.dseq);
    }
    if (object.gseq !== undefined && object.gseq !== null) {
      message.gseq = object.gseq;
    }
    if (object.oseq !== undefined && object.oseq !== null) {
      message.oseq = object.oseq;
    }
    if (object.provider !== undefined && object.provider !== null) {
      message.provider = object.provider;
    }
    if (object.state !== undefined && object.state !== null) {
      message.state = object.state;
    }
    return message;
  },
  toAmino(message: BidFilters): BidFiltersAmino {
    const obj: any = {};
    obj.owner = message.owner ?? "";
    obj.dseq = message.dseq ? message.dseq?.toString() : "0";
    obj.gseq = message.gseq ?? 0;
    obj.oseq = message.oseq ?? 0;
    obj.provider = message.provider ?? "";
    obj.state = message.state ?? "";
    return obj;
  },
  fromAminoMsg(object: BidFiltersAminoMsg): BidFilters {
    return BidFilters.fromAmino(object.value);
  },
  fromProtoMsg(message: BidFiltersProtoMsg): BidFilters {
    return BidFilters.decode(message.value);
  },
  toProto(message: BidFilters): Uint8Array {
    return BidFilters.encode(message).finish();
  },
  toProtoMsg(message: BidFilters): BidFiltersProtoMsg {
    return {
      typeUrl: "/akash.market.v1beta4.BidFilters",
      value: BidFilters.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(BidFilters.typeUrl, BidFilters);