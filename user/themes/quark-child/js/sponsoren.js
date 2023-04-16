var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
onload = () => __awaiter(this, void 0, void 0, function* () {
    const children = getSponsorenParent().children;
    for (const child of children) {
        removeChildIfBR(child);
    }
});
const getSponsorenParent = () => {
    return document.getElementById('sponsoren-list').children[0];
};
const removeChildIfBR = (child) => {
    if (child.tagName === 'BR') {
        child.remove();
    }
};
