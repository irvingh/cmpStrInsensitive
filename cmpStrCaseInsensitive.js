function cmpStrCaseInsensitive(a, b) {
    for (var i=0, l=Math.min(a.length, b.length); i<l && a[i].toLowerCase() === b[i].toLowerCase(); ++i);
    return (i == l) ? (a.length - b.length) : (a[i].toLowerCase().charCodeAt(0) - b[i].toLowerCase().charCodeAt(0));
}
