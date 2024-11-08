import { BinaryReader, BinaryWriter } from "../../binary";
import { GlobalDecoderRegistry } from "../../registry";
/**
 * Represents a whole or partial calendar date, such as a birthday. The time of
 * day and time zone are either specified elsewhere or are insignificant. The
 * date is relative to the Gregorian Calendar. This can represent one of the
 * following:
 * 
 * * A full date, with non-zero year, month, and day values
 * * A month and day value, with a zero year, such as an anniversary
 * * A year on its own, with zero month and day values
 * * A year and month value, with a zero day, such as a credit card expiration
 * date
 * 
 * Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
 */
export interface Date {
  /**
   * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
   * a year.
   */
  year: number;
  /**
   * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
   * month and day.
   */
  month: number;
  /**
   * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
   * to specify a year by itself or a year and month where the day isn't
   * significant.
   */
  day: number;
}
export interface DateProtoMsg {
  typeUrl: "/google.type.Date";
  value: Uint8Array;
}
/**
 * Represents a whole or partial calendar date, such as a birthday. The time of
 * day and time zone are either specified elsewhere or are insignificant. The
 * date is relative to the Gregorian Calendar. This can represent one of the
 * following:
 * 
 * * A full date, with non-zero year, month, and day values
 * * A month and day value, with a zero year, such as an anniversary
 * * A year on its own, with zero month and day values
 * * A year and month value, with a zero day, such as a credit card expiration
 * date
 * 
 * Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
 */
export interface DateAmino {
  /**
   * Year of the date. Must be from 1 to 9999, or 0 to specify a date without
   * a year.
   */
  year?: number;
  /**
   * Month of a year. Must be from 1 to 12, or 0 to specify a year without a
   * month and day.
   */
  month?: number;
  /**
   * Day of a month. Must be from 1 to 31 and valid for the year and month, or 0
   * to specify a year by itself or a year and month where the day isn't
   * significant.
   */
  day?: number;
}
export interface DateAminoMsg {
  type: "/google.type.Date";
  value: DateAmino;
}
/**
 * Represents a whole or partial calendar date, such as a birthday. The time of
 * day and time zone are either specified elsewhere or are insignificant. The
 * date is relative to the Gregorian Calendar. This can represent one of the
 * following:
 * 
 * * A full date, with non-zero year, month, and day values
 * * A month and day value, with a zero year, such as an anniversary
 * * A year on its own, with zero month and day values
 * * A year and month value, with a zero day, such as a credit card expiration
 * date
 * 
 * Related types are [google.type.TimeOfDay][google.type.TimeOfDay] and `google.protobuf.Timestamp`.
 */
export interface DateSDKType {
  year: number;
  month: number;
  day: number;
}
function createBaseDate(): Date {
  return {
    year: 0,
    month: 0,
    day: 0
  };
}
export const Date = {
  typeUrl: "/google.type.Date",
  is(o: any): o is Date {
    return o && (o.$typeUrl === Date.typeUrl || typeof o.year === "number" && typeof o.month === "number" && typeof o.day === "number");
  },
  isSDK(o: any): o is DateSDKType {
    return o && (o.$typeUrl === Date.typeUrl || typeof o.year === "number" && typeof o.month === "number" && typeof o.day === "number");
  },
  isAmino(o: any): o is DateAmino {
    return o && (o.$typeUrl === Date.typeUrl || typeof o.year === "number" && typeof o.month === "number" && typeof o.day === "number");
  },
  encode(message: Date, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.year !== 0) {
      writer.uint32(8).int32(message.year);
    }
    if (message.month !== 0) {
      writer.uint32(16).int32(message.month);
    }
    if (message.day !== 0) {
      writer.uint32(24).int32(message.day);
    }
    return writer;
  },
  decode(input: BinaryReader | Uint8Array, length?: number): Date {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDate();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.year = reader.int32();
          break;
        case 2:
          message.month = reader.int32();
          break;
        case 3:
          message.day = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromPartial(object: Partial<Date>): Date {
    const message = createBaseDate();
    message.year = object.year ?? 0;
    message.month = object.month ?? 0;
    message.day = object.day ?? 0;
    return message;
  },
  fromAmino(object: DateAmino): Date {
    const message = createBaseDate();
    if (object.year !== undefined && object.year !== null) {
      message.year = object.year;
    }
    if (object.month !== undefined && object.month !== null) {
      message.month = object.month;
    }
    if (object.day !== undefined && object.day !== null) {
      message.day = object.day;
    }
    return message;
  },
  toAmino(message: Date): DateAmino {
    const obj: any = {};
    obj.year = message.year === 0 ? undefined : message.year;
    obj.month = message.month === 0 ? undefined : message.month;
    obj.day = message.day === 0 ? undefined : message.day;
    return obj;
  },
  fromAminoMsg(object: DateAminoMsg): Date {
    return Date.fromAmino(object.value);
  },
  fromProtoMsg(message: DateProtoMsg): Date {
    return Date.decode(message.value);
  },
  toProto(message: Date): Uint8Array {
    return Date.encode(message).finish();
  },
  toProtoMsg(message: Date): DateProtoMsg {
    return {
      typeUrl: "/google.type.Date",
      value: Date.encode(message).finish()
    };
  }
};
GlobalDecoderRegistry.register(Date.typeUrl, Date);