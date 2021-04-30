const TargetClient = require("@adobe/target-nodejs-sdk");

const options = {
  client: 'adobesummit2018',
  organizationId: '65453EA95A70434F0A495D34@AdobeOrg',
  decisioningMethod: 'on-device',
  // decisioningMethod: 'server-side',
  propertyToken: 'a4d17d78-cb39-6171-b12d-a222a62ebe49',
  events: {
    clientReady,
  }
};

const targetClient = TargetClient.create(options);

async function clientReady() {
  console.log('Target client is ready');
  const response = await targetClient.getOffers({
    request: {
      execute: {
        mboxes: [
          { index: 0, name: 'sam-mbox' },
        ],
      },
    },
  });
  console.log(JSON.stringify(response, undefined, 2));
  process.exit();
}

function artifactDownloadSucceeded({ artifactPayload, artifactLocation }) {
  console.log(artifactLocation);
  console.log(artifactPayload);
}
