grammar Fettuccine

terminal ID: /[_a-zA-Z][\w_]*/;
terminal STRING: /"[^"]*"|'[^']*'/;

hidden terminal WS: /\s+/;
hidden terminal ML_COMMENT: /\/\*[\s\S]*?\*\//;
hidden terminal SL_COMMENT: /\/\/[^\n\r]*/;

entry Model:
    (nodes+=Node|ports+=Port|edges+=Edge)*
;

fragment LABEL_CONFIG:
    label=STRING
;

fragment NODE_CONFIG:
    '{' (inputs+=InputPort|outputs+=OutputPort|nodes+=Node)+ '}'
;

InputPort:
    'input' port=[Port:ID]
;

OutputPort:
    'output' port=[Port:ID]
;

Node:
    'node' name=ID LABEL_CONFIG? NODE_CONFIG?
;

Port:
    'port' name=ID LABEL_CONFIG?
;

Edge:
    'edge' source=[Node] 'to' target=[Node] ('on' port=[Port])? LABEL_CONFIG?
;

