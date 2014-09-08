function(Y) {
    var UA = Y.UA;

    return ((UA.mobile || UA.android || UA.ios) && UA.touch);
}