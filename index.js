var $ltMAx$joi = require("joi");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

console.log((0, ($parcel$interopDefault($ltMAx$joi))));
const $5aef65d9dea37c73$var$passwordSchema = (0, ($parcel$interopDefault($ltMAx$joi))).string().min(4).max(7);
function $5aef65d9dea37c73$export$2e2bcd8739ae039(password) {
    return $5aef65d9dea37c73$var$passwordSchema.validate(password);
}


console.log((0, $5aef65d9dea37c73$export$2e2bcd8739ae039)("dflfbgs"));


//# sourceMappingURL=index.js.map
