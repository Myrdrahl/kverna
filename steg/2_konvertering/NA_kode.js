const io = require("../../lib/io")
const config = require("../../config")
const { erKartleggingsnivå } = require("../../lib/koder")
const { capitalizeTittel } = require("../../lib/koder")

let alleKoder = io.lesDatafil("inn_na")

function kodefix(kode) {
  if (!kode) return kode
  return kode.toUpperCase().replace(" ", "_")
}

function importerKoder() {
  const mineKoder = {}
  for (let node of alleKoder) {
    const kode = kodefix(node.Kode.Id)
    let o = { tittel: { nb: capitalizeTittel(node.Navn) } }
    mineKoder[kode] = o
  }
  return mineKoder
}

const koder = importerKoder()
io.skrivDatafil(__filename, koder)
