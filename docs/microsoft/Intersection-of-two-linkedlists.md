class Solution(object):
    def getIntersectionNode(self, headA, headB):
        """
        :type head1, head1: ListNode
        :rtype: ListNode
        """
        # If any one of head is null i.e
        # no Intersection Point
        if headA == None or headB == None:
            return None
        
        # Maintaining two pointers nodeA and nodeB
        # at the head of A and B,
        nodeA = headA
        nodeB = headB
        
        while nodeA != nodeB:
            
            # When nodeA reaches the end of a list, then
            # reassign it to the headB.
            if nodeA == None:
                nodeA = headB
            else:
                nodeA = nodeA.next
           
            # When nodeB reaches the end of a list, then
            # reassign it to the headA.               
            if nodeB == None:
                nodeB = headA
            else:
                nodeB = nodeB.next
        
        return nodeA