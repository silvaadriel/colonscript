export default function colonToJs(colonCode) {
  let code = colonCode;

  if (code === null) return "";

  code = code.replace(
    /(v:)(?=(?:[^"]|"[^"]*")*$)(?=(?:[^`]|`[^`]*`)*$)/g,
    "let "
  );

  code = code.replace(
    /(c:)(?=(?:[^"]|"[^"]*")*$)(?=(?:[^`]|`[^`]*`)*$)/g,
    "const "
  );

  code = code.replace(
    /(r:)(?=(?:[^"]|"[^"]*")*$)(?=(?:[^`]|`[^`]*`)*$)/g,
    "return "
  );

  code = code.replace(/(f:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "function $2 {");
  code = code.replace(/(f;)(?=(?:[^"]|"[^"]*")*$)/g, "}");

  code = code.replace(/(<:)(?=(?:[^"]|"[^"]*")*$)/g, " => ");
  code = code.replace(/(<;)(?=(?:[^"]|"[^"]*")*$)/g, ";");

  code = code.replace(/(=:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "=> {");
  code = code.replace(/(=;)(?=(?:[^"]|"[^"]*")*$)/g, "};");

  code = code.replace(/(ei:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "} else if ($2) {");
  code = code.replace(/(ei;)(?=(?:[^"]|"[^"]*")*$)/g, "}");

  code = code.replace(/(i:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "if ($2) {");
  code = code.replace(/(i;)(?=(?:[^"]|"[^"]*")*$)/g, "}");

  code = code.replace(/(e:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "} else {");
  code = code.replace(/(e;)(?=(?:[^"]|"[^"]*")*$)/g, "}");

  code = code.replace(/(fl:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "for ($2) {");
  code = code.replace(/(fl;)(?=(?:[^"]|"[^"]*")*$)/g, "}");

  code = code.replace(/(wl:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "while ($2) {");
  code = code.replace(/(wl;)(?=(?:[^"]|"[^"]*")*$)/g, "}");

  code = code.replace(/(d:)(?=(?:[^"]|"[^"]*")*$)/g, "do {");
  code = code.replace(/(w:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "} while($2);");

  code = code.replace(/(!:)(?=(?:[^"]|"[^"]*")*$)(.*)/g, "console.log($2)");

  return code;
}
