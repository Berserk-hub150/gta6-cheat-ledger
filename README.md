# GTA VI Cheat Ledger

**Find a reported button sequence and check where it came from.** Each entry keeps the combination, its evidence status and the source together.

## Try one lookup

[Download the ledger](https://github.com/Berserk-hub150/gta6-cheat-ledger/archive/refs/heads/main.zip), extract it and open `index.html`. Search **weather** to see the D-pad sequence and open the linked report. The lookup works offline. Following a source link requires a connection.

| Search term | What to inspect |
|---|---|
| `weather` | Direction sequence rendered as arrows |
| `wanted` | Evidence status and source for the reported effect |

The [current dataset](codes.json) contains four entries attributed to press reporting. Independent in-game verification remains open. `U`, `D`, `L` and `R` denote the D-pad directions.

## Improve an entry

Edit `codes.json`, keep a direct source, then run `python sync.py` to refresh the offline browser copy. A useful correction identifies the entry, platform and build tested, with a reproducible result.

---

[Explore the GTA VI project collection](https://github.com/Berserk-hub150/gta6-resource-index) · Independent fan project. Grand Theft Auto is a trademark of its respective owners.
