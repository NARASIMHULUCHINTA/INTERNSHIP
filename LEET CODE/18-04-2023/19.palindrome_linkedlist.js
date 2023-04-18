var isPalindrome = function (head) {
    function isPalindromRecursive(recursiveHead) {
        if (recursiveHead == null) {
            return true;
        }
        const next = isPalindromRecursive(recursiveHead.next);
        const valid = recursiveHead.val === head.val;
        head = head.next;
        return next && valid;
    }
    return isPalindromRecursive(head);
};