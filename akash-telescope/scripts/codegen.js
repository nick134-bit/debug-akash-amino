const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const { AMINO_MAP } = require('./aminos');

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/codegen');
console.log(protoDirs)
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    env: 'v-next',
    prototypes: {
      optionalQueryParams: false,
      useOptionalNullable: true,
      fieldDefaultIsOptional: false,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: true,
      addAminoTypeToObjects: true,
      methods: {
        encode: true,
        decode: true,
        fromJSON: false,
        toJSON: false,
        fromPartial: true,
        toAmino: true,
        fromAmino: true,
        toProto: true,
        fromProto: true
      },
      excluded: {
      }
    },
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      useUnionTypes: true
    },
    typingsFormat: {
        useDeepPartial: true,
        duration: 'duration',
        timestamp: 'date',
        useExact: true,
        autoFixUndefinedEnumDefault: true,
        num64: 'bigint',
        useTelescopeGeneratedType: true,
        customTypes: {
          useCosmosSDKDecimal: true
        }
      },
      patch: {
        'cosmos/group/v1/tx.proto': [
          {
            op: 'add',
            path: '@/MsgSubmitProposal/fields/messages/options',
            value: {
                '(cosmos_proto.accepts_interface)': 'cosmos.base.v1beta1.Msg'
          }
        }
      ]
    },
    bundle: {
      enabled: true
    },
    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },
    lcdClients: {
      enabled: false
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
