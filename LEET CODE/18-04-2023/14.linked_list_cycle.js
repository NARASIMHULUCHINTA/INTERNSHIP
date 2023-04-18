var hasCycle = function (head) {
    if (!head) {
        return false;
    }
    let first = head;
    let last = head;
    while (first) {
        if (!first.next) {
            return false;
        } else {
            first = first.next.next;
            last = last.next;
        }
        if (last == first) {
            return true;
        }
    }
    return false;
};