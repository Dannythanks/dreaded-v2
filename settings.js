/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0pnZmJnMk51SEF2Rnlqc1dUblFuQWc0UXliNHhaZG9hakg5NnU3Q2VIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFZYRkVoay8wbThSNlUzRXR6REN3VC9PRFZlcVVwR3pYQmI4cGp2RUtuYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXR2xtUmcyZUlsem1MdDlJVUUyRlkvUXFIbUlHeGc1TVUyUnF1UWxVazFVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtRCtHb0VzNGlXenJ5UCtmZHQ1eXk1NVplSTNneGpESU8yRGxTUENxUjFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEVXhTRzM2Si95eW1QUU4vTEdUQ3d2dkJ6amh5L1ZCWCtvUnZSbFdJbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inlub2xaakVTM0JPbGJsa2tWNzBTKyt0NkFWT1RoQW55T3Zia2VOT0pMdzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJSU0d5cW5FM1lGTFZKMTFTVzBSQ3BoOFpKWDQ5TFNKSHF2TG9BMk1Fdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiajluaEE1Yy84OHV5Q29ZTlh5bm9UVjdrVzViRDBTbzFZbHlJd0ZoUWt6Yz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFLekJ5MXlGUGZvOEo2OXR5UWNTaHZiclJRcDhDbnY4MEttdS9vUEZ3VnUxNVhxK2VtbkZwaGFEUlVzSW4rQUZQQXFZNkpQMk1ZZ0kyTGZJdWZlK0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzMsImFkdlNlY3JldEtleSI6Ik9KdGRoMkI4RFROYWNRWEpVc243TEJqclFlbVpXUG1EU0NHTENkYi9nRm89IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NjgyNDE5MTExQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijg4NUI3RkE1MTVBRUM2N0IwN0VEOTcxMDY4ODU5MDY1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MzI2MjI4NTl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkRsWGNMcU9JUVdlYU9ETzVZclBvanciLCJwaG9uZUlkIjoiY2MyMjczYWEtMzgwOS00ZWRmLTk1MTQtNGFmMTZmNDMzMGRhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNQY3BuQW8xSEkrRmJueklrWmNuSkJ2NnFWRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6aUJxSHRjQjU5Q1pCY3phN0hvTkhoUGdjSFk9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTkFCRTdHREgiLCJtZSI6eyJpZCI6IjI1NTY4MjQxOTExMToyM0BzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHUyeFBvRUVNN3pscm9HR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiYytnRm5iQmJHYWtGb2hoTTVQNDQ0Umpua3JqMDBWRlRXeDNrT24vR1owYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSk9RSk9SNWIxbFNoMEkxVU00NEd1M0xKeWJ3Sng5K3JVdUdHNWF0ekRWQVNJVitkRWkwVU9hMHNaVTNYR0FBSWVNV1V0K3F3UFZ6bU1ubWp1dWo2QWc9PSIsImRldmljZVNpZ25hdHVyZSI6InVNV0FTN01EQ0FiTzlDeHY0WjFjTitKQStDY0tLRFV1bDJqT3B1UEVXS2p0R1JxUlJwVlFVNE9Qc2xLZDVaN1ZvSnpJZmdmQml3eExURXZJUFhFOEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1NjgyNDE5MTExOjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhQb0JaMndXeG1wQmFJWVRPVCtPT0VZNTVLNDlORlJVMXNkNURwL3htZEgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzI2MjI4MTIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQzBTIn0=';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "255";
const author = process.env.STICKER_AUTHOR || 'fortunatus';
const packname = process.env.
const dev = process.env.DEV || '255682419111';
const DevDreaded = dev.split(",");
const botname = process.env.BOTNAME || 'DREADED';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'online';

const antitag = process.env.ANTITAG || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  mode,
autolike,
  prefix,
  mycode,
  author,
  packname,
  dev,
  DevDreaded,
  gcpresence,
  antionce,
session,
antitag,
antidelete
};
