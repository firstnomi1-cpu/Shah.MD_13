/**
 * Ulric-X MD V13.1 - Pre-Defined Menu System
 *
 * Exact style from owner's original request:
 *
 * ________ 𝐔𝐥𝐫𝐢𝐜 𝐗 _______
 *
 * ›  𝐁𝐎𝐓  𝐔𝐥𝐫𝐢𝐜 𝐗 𝐌𝐫 𝐒𝐡𝐚𝐡
 * › 𝐎𝐖𝐍𝐄𝐑 : *𝐔𝐋𝐑𝐈𝐂 𝐗  𝐒𝐇𝐀𝐇*
 * › 𝐕𝐄𝐑𝐒𝐈𝐎𝐍  :
 * › 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌 :
 *
 * ╭━━❖. 𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔. ❖━┈⊷
 * ┃╭────────────────
 * ┃│⌬ ›  cmd1
 * ┃│⌬ ›  cmd2
 * ┃╰───────────────
 * ╰━━━━━━━━━━━━━━━┈⊷
 *
 * > 𝐔𝐋𝐑𝐈𝐂 𝐗 𝐌𝐈𝐒𝐓𝐄𝐑 𝐒𝐇𝐀𝐇
 */
const config = require('../config');
const verified = require('./verifiedReply');

const FOOTER = config.BOT_FOOTER || '> 𝐔𝐋𝐑𝐈𝐂 𝐗 𝐌𝐈𝐒𝐓𝐄𝐑 𝐒𝐇𝐀𝐇';
const READMORE = '\u200E'.repeat(4000);

// ─── Header builder ─────────────────────────────────────────────
function buildHeader(runtime, totalUsers, totalCommands) {
  return `________ 𝐔𝐥𝐫𝐢𝐜 𝐗 _______

›  𝐁𝐎𝐓  𝐔𝐥𝐫𝐢𝐜 𝐗 𝐌𝐫 𝐒𝐡𝐚𝐡
› 𝐎𝐖𝐍𝐄𝐑 : *𝐔𝐋𝐑𝐈𝐂 𝐗  𝐒𝐇𝐀𝐇*
› 𝐕𝐄𝐑𝐒𝐈𝐎𝐍  : *${config.BOT_VERSION}*
› 𝐏𝐋𝐀𝐓𝐅𝐎𝐑𝐌 : *${config.BOT_PLATFORM}*
› 𝐔𝐏𝐓𝐈𝐌𝐄 : *${runtime}*
› 𝐔𝐒𝐄𝐑𝐒 : *${totalUsers}*
› 𝐂𝐌𝐃𝐒 : *${totalCommands}*`;
}

// ─── Category menu builder ──────────────────────────────────────
function buildCategoryBlock(title, commands, prefix) {
  let text = `╭━━❖. ${title}. ❖━┈⊷\n`;
  text += `┃╭────────────────\n`;
  for (const cmd of commands) {
    text += `┃│⌬ ›  ${prefix}${cmd}\n`;
  }
  text += `┃╰───────────────\n`;
  text += `╰━━━━━━━━━━━━━━━┈⊷`;
  return text;
}

// ─── Main Menu (.menu) ──────────────────────────────────────────
function mainMenu(prefix, runtime, totalUsers, totalCommands) {
  let text = buildHeader(runtime, totalUsers, totalCommands);
  text += `\n\n`;
  text += `╭━━❖. 𝐌𝐄𝐍𝐔 𝐋𝐈𝐒𝐓. ❖━┈⊷\n`;
  text += `┃╭────────────────\n`;
  text += `┃│⌬ ›  ${prefix}allmenu — All Commands\n`;
  text += `┃│⌬ ›  ${prefix}ownermenu\n`;
  text += `┃│⌬ ›  ${prefix}groupmenu\n`;
  text += `┃│⌬ ›  ${prefix}downloadmenu\n`;
  text += `┃│⌬ ›  ${prefix}stickermenu\n`;
  text += `┃│⌬ ›  ${prefix}funmenu\n`;
  text += `┃│⌬ ›  ${prefix}gamemenu\n`;
  text += `┃│⌬ ›  ${prefix}animemenu\n`;
  text += `┃│⌬ ›  ${prefix}aimenu\n`;
  text += `┃│⌬ ›  ${prefix}logomenu\n`;
  text += `┃│⌬ ›  ${prefix}voicemenu\n`;
  text += `┃│⌬ ›  ${prefix}imagemenu\n`;
  text += `┃│⌬ ›  ${prefix}mediamenu\n`;
  text += `┃│⌬ ›  ${prefix}utilitymenu\n`;
  text += `┃│⌬ ›  ${prefix}religionmenu\n`;
  text += `┃│⌬ ›  ${prefix}infomenu\n`;
  text += `┃│⌬ ›  ${prefix}textmenu\n`;
  text += `┃│⌬ ›  ${prefix}randommenu\n`;
  text += `┃│⌬ ›  ${prefix}reactionmenu\n`;
  text += `┃│⌬ ›  ${prefix}convertmenu\n`;
  text += `┃│⌬ ›  ${prefix}searchmenu\n`;
  text += `┃│⌬ ›  ${prefix}databasemenu\n`;
  text += `┃╰───────────────\n`;
  text += `╰━━━━━━━━━━━━━━━┈⊷\n\n`;

  text += `╭━━❖. 𝐂𝐇𝐀𝐍𝐍𝐄𝐋. ❖━┈⊷\n`;
  text += `┃╭────────────────\n`;
  text += `┃│⌬ ›  ${config.BOT_CHANNEL_NAME}\n`;
  text += `┃│⌬ ›  ${config.BOT_CHANNEL_URL}\n`;
  text += `┃╰───────────────\n`;
  text += `╰━━━━━━━━━━━━━━━┈⊷\n\n`;

  text += FOOTER;
  return text;
}

// ─── All Menu (.allmenu) ────────────────────────────────────────
function allMenu(prefix, runtime, totalUsers, totalCommands, categories) {
  let text = buildHeader(runtime, totalUsers, totalCommands);
  text += '\n' + READMORE + '\n';

  // Category titles in stylish format
  const catTitles = {
    main: '𝐌𝐀𝐈𝐍',
    owner: '𝐎𝐖𝐍𝐄𝐑',
    group: '𝐆𝐑𝐎𝐔𝐏',
    download: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃',
    sticker: '𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
    fun: '𝐅𝐔𝐍',
    game: '𝐆𝐀𝐌𝐄',
    anime: '𝐀𝐍𝐈𝐌𝐄',
    ai: '𝐀𝐈',
    logo: '𝐋𝐎𝐆𝐎',
    voice: '𝐕𝐎𝐈𝐂𝐄',
    image: '𝐈𝐌𝐀𝐆𝐄',
    media: '𝐌𝐄𝐃𝐈𝐀',
    utility: '𝐔𝐓𝐈𝐋𝐈𝐓𝐘',
    religion: '𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍',
    info: '𝐈𝐍𝐅𝐎',
    text: '𝐓𝐄𝐗𝐓',
    random: '𝐑𝐀𝐍𝐃𝐎𝐌',
    reaction: '𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍',
    convert: '𝐂𝐎𝐍𝐕𝐄𝐑𝐓',
    search: '𝐒𝐄𝐀𝐑𝐂𝐇',
    database: '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄',
    misc: '𝐌𝐈𝐒𝐂'
  };

  const sortedCats = [...categories.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  for (const [cat, cmds] of sortedCats) {
    const title = catTitles[cat] || cat.toUpperCase();
    const cmdNames = cmds.map(c => c.name);
    text += buildCategoryBlock(`${title} 𝐌𝐄𝐍𝐔`, cmdNames, prefix) + '\n\n';
  }

  text += `╭━━❖. 𝐂𝐇𝐀𝐍𝐍𝐄𝐋. ❖━┈⊷\n`;
  text += `┃╭────────────────\n`;
  text += `┃│⌬ ›  ${config.BOT_CHANNEL_NAME}\n`;
  text += `┃│⌬ ›  ${config.BOT_CHANNEL_URL}\n`;
  text += `┃╰───────────────\n`;
  text += `╰━━━━━━━━━━━━━━━┈⊷\n\n`;

  text += FOOTER;
  return text;
}

// ─── Category Menu (.<category>menu) ────────────────────────────
function categoryMenu(prefix, catName, cmds) {
  const catTitles = {
    main: '𝐌𝐀𝐈𝐍', owner: '𝐎𝐖𝐍𝐄𝐑', group: '𝐆𝐑𝐎𝐔𝐏', download: '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃',
    sticker: '𝐒𝐓𝐈𝐂𝐊𝐄𝐑', fun: '𝐅𝐔𝐍', game: '𝐆𝐀𝐌𝐄', anime: '𝐀𝐍𝐈𝐌𝐄',
    ai: '𝐀𝐈', logo: '𝐋𝐎𝐆𝐎', voice: '𝐕𝐎𝐈𝐂𝐄', image: '𝐈𝐌𝐀𝐆𝐄',
    media: '𝐌𝐄𝐃𝐈𝐀', utility: '𝐔𝐓𝐈𝐋𝐈𝐓𝐘', religion: '𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍',
    info: '𝐈𝐍𝐅𝐎', text: '𝐓𝐄𝐗𝐓', random: '𝐑𝐀𝐍𝐃𝐎𝐌',
    reaction: '𝐑𝐄𝐀𝐂𝐓𝐈𝐎𝐍', convert: '𝐂𝐎𝐍𝐕𝐄𝐑𝐓',
    search: '𝐒𝐄𝐀𝐑𝐂𝐇', database: '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄', misc: '𝐌𝐈𝐒𝐂'
  };

  const title = catTitles[catName] || catName.toUpperCase();
  const cmdNames = cmds.map(c => c.name);

  let text = buildHeader('0d 0h 0m', 0, cmds.length);
  text += '\n\n';
  text += buildCategoryBlock(`${title} 𝐌𝐄𝐍𝐔`, cmdNames, prefix);
  text += '\n\n' + FOOTER;
  return text;
}

// ─── Send Verified Menu ─────────────────────────────────────────
async function sendVerifiedMenu(sock, jid, menuText, quoted) {
  return verified.sendVerified(sock, jid, {
    image: { url: config.BOT_LOGO },
    caption: menuText,
    contextInfo: verified.verifiedContext()
  }, { quoted });
}

module.exports = {
  mainMenu,
  allMenu,
  categoryMenu,
  sendVerifiedMenu,
  buildHeader,
  buildCategoryBlock,
  FOOTER,
  READMORE
};
