const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if(!event) return TRIVIAL_PARTITION_KEY;

  if (event?.partitionKey) {
    candidate = event.partitionKey;
  } else {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  candidate = candidate.length > MAX_PARTITION_KEY_LENGTH ? crypto.createHash("sha3-512").update(candidate).digest("hex") : candidate;

  return candidate || TRIVIAL_PARTITION_KEY;
};

/**
 * What is refactored:
 * 1. Removed unnecessary if statement
 * 2. Used optional chaining to simplify code
 * 3. Used ternary operator to simplify the last if statement
 *
 */
