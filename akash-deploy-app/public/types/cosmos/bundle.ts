import * as _131 from "./auth/v1beta1/auth";
import * as _132 from "./auth/v1beta1/genesis";
import * as _133 from "./auth/v1beta1/query";
import * as _134 from "./authz/v1beta1/authz";
import * as _135 from "./authz/v1beta1/event";
import * as _136 from "./authz/v1beta1/genesis";
import * as _137 from "./authz/v1beta1/query";
import * as _138 from "./authz/v1beta1/tx";
import * as _139 from "./bank/v1beta1/authz";
import * as _140 from "./bank/v1beta1/bank";
import * as _141 from "./bank/v1beta1/genesis";
import * as _142 from "./bank/v1beta1/query";
import * as _143 from "./bank/v1beta1/tx";
import * as _144 from "./base/abci/v1beta1/abci";
import * as _145 from "./base/kv/v1beta1/kv";
import * as _146 from "./base/node/v1beta1/query";
import * as _147 from "./base/query/v1beta1/pagination";
import * as _148 from "./base/reflection/v1beta1/reflection";
import * as _149 from "./base/reflection/v2alpha1/reflection";
import * as _150 from "./base/snapshots/v1beta1/snapshot";
import * as _151 from "./base/store/v1beta1/commit_info";
import * as _152 from "./base/store/v1beta1/listening";
import * as _153 from "./base/tendermint/v1beta1/query";
import * as _154 from "./base/v1beta1/coin";
import * as _155 from "./capability/v1beta1/capability";
import * as _156 from "./capability/v1beta1/genesis";
import * as _157 from "./crisis/v1beta1/genesis";
import * as _158 from "./crisis/v1beta1/tx";
import * as _159 from "./crypto/ed25519/keys";
import * as _160 from "./crypto/multisig/keys";
import * as _161 from "./crypto/secp256k1/keys";
import * as _162 from "./crypto/secp256r1/keys";
import * as _163 from "./distribution/v1beta1/distribution";
import * as _164 from "./distribution/v1beta1/genesis";
import * as _165 from "./distribution/v1beta1/query";
import * as _166 from "./distribution/v1beta1/tx";
import * as _167 from "./evidence/v1beta1/evidence";
import * as _168 from "./evidence/v1beta1/genesis";
import * as _169 from "./evidence/v1beta1/query";
import * as _170 from "./evidence/v1beta1/tx";
import * as _171 from "./feegrant/v1beta1/feegrant";
import * as _172 from "./feegrant/v1beta1/genesis";
import * as _173 from "./feegrant/v1beta1/query";
import * as _174 from "./feegrant/v1beta1/tx";
import * as _175 from "./genutil/v1beta1/genesis";
import * as _176 from "./gov/v1beta1/genesis";
import * as _177 from "./gov/v1beta1/gov";
import * as _178 from "./gov/v1beta1/query";
import * as _179 from "./gov/v1beta1/tx";
import * as _180 from "./mint/v1beta1/genesis";
import * as _181 from "./mint/v1beta1/mint";
import * as _182 from "./mint/v1beta1/query";
import * as _183 from "./params/v1beta1/params";
import * as _184 from "./params/v1beta1/query";
import * as _185 from "./slashing/v1beta1/genesis";
import * as _186 from "./slashing/v1beta1/query";
import * as _187 from "./slashing/v1beta1/slashing";
import * as _188 from "./slashing/v1beta1/tx";
import * as _189 from "./staking/v1beta1/authz";
import * as _190 from "./staking/v1beta1/genesis";
import * as _191 from "./staking/v1beta1/query";
import * as _192 from "./staking/v1beta1/staking";
import * as _193 from "./staking/v1beta1/tx";
import * as _194 from "./tx/signing/v1beta1/signing";
import * as _195 from "./tx/v1beta1/service";
import * as _196 from "./tx/v1beta1/tx";
import * as _197 from "./upgrade/v1beta1/query";
import * as _198 from "./upgrade/v1beta1/upgrade";
import * as _199 from "./vesting/v1beta1/tx";
import * as _200 from "./vesting/v1beta1/vesting";
import * as _352 from "./authz/v1beta1/tx.amino";
import * as _353 from "./bank/v1beta1/tx.amino";
import * as _354 from "./crisis/v1beta1/tx.amino";
import * as _355 from "./distribution/v1beta1/tx.amino";
import * as _356 from "./evidence/v1beta1/tx.amino";
import * as _357 from "./feegrant/v1beta1/tx.amino";
import * as _358 from "./gov/v1beta1/tx.amino";
import * as _359 from "./slashing/v1beta1/tx.amino";
import * as _360 from "./staking/v1beta1/tx.amino";
import * as _361 from "./vesting/v1beta1/tx.amino";
import * as _362 from "./authz/v1beta1/tx.registry";
import * as _363 from "./bank/v1beta1/tx.registry";
import * as _364 from "./crisis/v1beta1/tx.registry";
import * as _365 from "./distribution/v1beta1/tx.registry";
import * as _366 from "./evidence/v1beta1/tx.registry";
import * as _367 from "./feegrant/v1beta1/tx.registry";
import * as _368 from "./gov/v1beta1/tx.registry";
import * as _369 from "./slashing/v1beta1/tx.registry";
import * as _370 from "./staking/v1beta1/tx.registry";
import * as _371 from "./vesting/v1beta1/tx.registry";
import * as _372 from "./auth/v1beta1/query.rpc.Query";
import * as _373 from "./authz/v1beta1/query.rpc.Query";
import * as _374 from "./bank/v1beta1/query.rpc.Query";
import * as _375 from "./base/node/v1beta1/query.rpc.Service";
import * as _376 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _377 from "./distribution/v1beta1/query.rpc.Query";
import * as _378 from "./evidence/v1beta1/query.rpc.Query";
import * as _379 from "./feegrant/v1beta1/query.rpc.Query";
import * as _380 from "./gov/v1beta1/query.rpc.Query";
import * as _381 from "./mint/v1beta1/query.rpc.Query";
import * as _382 from "./params/v1beta1/query.rpc.Query";
import * as _383 from "./slashing/v1beta1/query.rpc.Query";
import * as _384 from "./staking/v1beta1/query.rpc.Query";
import * as _385 from "./tx/v1beta1/service.rpc.Service";
import * as _386 from "./upgrade/v1beta1/query.rpc.Query";
import * as _387 from "./authz/v1beta1/tx.rpc.msg";
import * as _388 from "./bank/v1beta1/tx.rpc.msg";
import * as _389 from "./crisis/v1beta1/tx.rpc.msg";
import * as _390 from "./distribution/v1beta1/tx.rpc.msg";
import * as _391 from "./evidence/v1beta1/tx.rpc.msg";
import * as _392 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _393 from "./gov/v1beta1/tx.rpc.msg";
import * as _394 from "./slashing/v1beta1/tx.rpc.msg";
import * as _395 from "./staking/v1beta1/tx.rpc.msg";
import * as _396 from "./vesting/v1beta1/tx.rpc.msg";
import * as _421 from "./rpc.query";
import * as _422 from "./rpc.tx";
export namespace cosmos {
  export namespace auth {
    export const v1beta1 = {
      ..._131,
      ..._132,
      ..._133,
      ..._372
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._134,
      ..._135,
      ..._136,
      ..._137,
      ..._138,
      ..._352,
      ..._362,
      ..._373,
      ..._387
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._139,
      ..._140,
      ..._141,
      ..._142,
      ..._143,
      ..._353,
      ..._363,
      ..._374,
      ..._388
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._144
      };
    }
    export namespace kv {
      export const v1beta1 = {
        ..._145
      };
    }
    export namespace node {
      export const v1beta1 = {
        ..._146,
        ..._375
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._147
      };
    }
    export namespace reflection {
      export const v1beta1 = {
        ..._148
      };
      export const v2alpha1 = {
        ..._149
      };
    }
    export namespace snapshots {
      export const v1beta1 = {
        ..._150
      };
    }
    export namespace store {
      export const v1beta1 = {
        ..._151,
        ..._152
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._153,
        ..._376
      };
    }
    export const v1beta1 = {
      ..._154
    };
  }
  export namespace capability {
    export const v1beta1 = {
      ..._155,
      ..._156
    };
  }
  export namespace crisis {
    export const v1beta1 = {
      ..._157,
      ..._158,
      ..._354,
      ..._364,
      ..._389
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._159
    };
    export const multisig = {
      ..._160
    };
    export const secp256k1 = {
      ..._161
    };
    export const secp256r1 = {
      ..._162
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._163,
      ..._164,
      ..._165,
      ..._166,
      ..._355,
      ..._365,
      ..._377,
      ..._390
    };
  }
  export namespace evidence {
    export const v1beta1 = {
      ..._167,
      ..._168,
      ..._169,
      ..._170,
      ..._356,
      ..._366,
      ..._378,
      ..._391
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._171,
      ..._172,
      ..._173,
      ..._174,
      ..._357,
      ..._367,
      ..._379,
      ..._392
    };
  }
  export namespace genutil {
    export const v1beta1 = {
      ..._175
    };
  }
  export namespace gov {
    export const v1beta1 = {
      ..._176,
      ..._177,
      ..._178,
      ..._179,
      ..._358,
      ..._368,
      ..._380,
      ..._393
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._180,
      ..._181,
      ..._182,
      ..._381
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._183,
      ..._184,
      ..._382
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._185,
      ..._186,
      ..._187,
      ..._188,
      ..._359,
      ..._369,
      ..._383,
      ..._394
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._189,
      ..._190,
      ..._191,
      ..._192,
      ..._193,
      ..._360,
      ..._370,
      ..._384,
      ..._395
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._194
      };
    }
    export const v1beta1 = {
      ..._195,
      ..._196,
      ..._385
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._197,
      ..._198,
      ..._386
    };
  }
  export namespace vesting {
    export const v1beta1 = {
      ..._199,
      ..._200,
      ..._361,
      ..._371,
      ..._396
    };
  }
  export const ClientFactory = {
    ..._421,
    ..._422
  };
}