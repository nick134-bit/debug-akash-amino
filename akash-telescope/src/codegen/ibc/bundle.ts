import * as _231 from "./applications/fee/v1/ack";
import * as _232 from "./applications/fee/v1/fee";
import * as _233 from "./applications/fee/v1/genesis";
import * as _234 from "./applications/fee/v1/metadata";
import * as _235 from "./applications/fee/v1/query";
import * as _236 from "./applications/fee/v1/tx";
import * as _237 from "./applications/interchain_accounts/controller/v1/controller";
import * as _238 from "./applications/interchain_accounts/controller/v1/query";
import * as _239 from "./applications/interchain_accounts/host/v1/host";
import * as _240 from "./applications/interchain_accounts/host/v1/query";
import * as _241 from "./applications/interchain_accounts/v1/account";
import * as _242 from "./applications/interchain_accounts/v1/genesis";
import * as _243 from "./applications/interchain_accounts/v1/metadata";
import * as _244 from "./applications/interchain_accounts/v1/packet";
import * as _245 from "./applications/transfer/v1/genesis";
import * as _246 from "./applications/transfer/v1/query";
import * as _247 from "./applications/transfer/v1/transfer";
import * as _248 from "./applications/transfer/v1/tx";
import * as _249 from "./applications/transfer/v2/packet";
import * as _250 from "./core/channel/v1/channel";
import * as _251 from "./core/channel/v1/genesis";
import * as _252 from "./core/channel/v1/query";
import * as _253 from "./core/channel/v1/tx";
import * as _254 from "./core/client/v1/client";
import * as _255 from "./core/client/v1/genesis";
import * as _256 from "./core/client/v1/query";
import * as _257 from "./core/client/v1/tx";
import * as _258 from "./core/commitment/v1/commitment";
import * as _259 from "./core/connection/v1/connection";
import * as _260 from "./core/connection/v1/genesis";
import * as _261 from "./core/connection/v1/query";
import * as _262 from "./core/connection/v1/tx";
import * as _263 from "./core/types/v1/genesis";
import * as _264 from "./lightclients/localhost/v1/localhost";
import * as _265 from "./lightclients/solomachine/v1/solomachine";
import * as _266 from "./lightclients/solomachine/v2/solomachine";
import * as _267 from "./lightclients/tendermint/v1/tendermint";
import * as _397 from "./applications/fee/v1/tx.amino";
import * as _398 from "./applications/transfer/v1/tx.amino";
import * as _399 from "./core/channel/v1/tx.amino";
import * as _400 from "./core/client/v1/tx.amino";
import * as _401 from "./core/connection/v1/tx.amino";
import * as _402 from "./applications/fee/v1/tx.registry";
import * as _403 from "./applications/transfer/v1/tx.registry";
import * as _404 from "./core/channel/v1/tx.registry";
import * as _405 from "./core/client/v1/tx.registry";
import * as _406 from "./core/connection/v1/tx.registry";
import * as _407 from "./applications/fee/v1/query.rpc.Query";
import * as _408 from "./applications/interchain_accounts/controller/v1/query.rpc.Query";
import * as _409 from "./applications/interchain_accounts/host/v1/query.rpc.Query";
import * as _410 from "./applications/transfer/v1/query.rpc.Query";
import * as _411 from "./core/channel/v1/query.rpc.Query";
import * as _412 from "./core/client/v1/query.rpc.Query";
import * as _413 from "./core/connection/v1/query.rpc.Query";
import * as _414 from "./applications/fee/v1/tx.rpc.msg";
import * as _415 from "./applications/transfer/v1/tx.rpc.msg";
import * as _416 from "./core/channel/v1/tx.rpc.msg";
import * as _417 from "./core/client/v1/tx.rpc.msg";
import * as _418 from "./core/connection/v1/tx.rpc.msg";
import * as _423 from "./rpc.query";
import * as _424 from "./rpc.tx";
export namespace ibc {
  export namespace applications {
    export namespace fee {
      export const v1 = {
        ..._231,
        ..._232,
        ..._233,
        ..._234,
        ..._235,
        ..._236,
        ..._397,
        ..._402,
        ..._407,
        ..._414
      };
    }
    export namespace interchain_accounts {
      export namespace controller {
        export const v1 = {
          ..._237,
          ..._238,
          ..._408
        };
      }
      export namespace host {
        export const v1 = {
          ..._239,
          ..._240,
          ..._409
        };
      }
      export const v1 = {
        ..._241,
        ..._242,
        ..._243,
        ..._244
      };
    }
    export namespace transfer {
      export const v1 = {
        ..._245,
        ..._246,
        ..._247,
        ..._248,
        ..._398,
        ..._403,
        ..._410,
        ..._415
      };
      export const v2 = {
        ..._249
      };
    }
  }
  export namespace core {
    export namespace channel {
      export const v1 = {
        ..._250,
        ..._251,
        ..._252,
        ..._253,
        ..._399,
        ..._404,
        ..._411,
        ..._416
      };
    }
    export namespace client {
      export const v1 = {
        ..._254,
        ..._255,
        ..._256,
        ..._257,
        ..._400,
        ..._405,
        ..._412,
        ..._417
      };
    }
    export namespace commitment {
      export const v1 = {
        ..._258
      };
    }
    export namespace connection {
      export const v1 = {
        ..._259,
        ..._260,
        ..._261,
        ..._262,
        ..._401,
        ..._406,
        ..._413,
        ..._418
      };
    }
    export namespace types {
      export const v1 = {
        ..._263
      };
    }
  }
  export namespace lightclients {
    export namespace localhost {
      export const v1 = {
        ..._264
      };
    }
    export namespace solomachine {
      export const v1 = {
        ..._265
      };
      export const v2 = {
        ..._266
      };
    }
    export namespace tendermint {
      export const v1 = {
        ..._267
      };
    }
  }
  export const ClientFactory = {
    ..._423,
    ..._424
  };
}