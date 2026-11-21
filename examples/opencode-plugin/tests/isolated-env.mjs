// Loaded with `node --import` before every test file: the suite gets its own
// pending queue, so no test replays (and drops) the host's real
// ~/.openviking/pending captures into a throwaway test server.
import { mkdtempSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"

process.env.OPENVIKING_PENDING_DIR = mkdtempSync(join(tmpdir(), "ov-oc-pending-"))
