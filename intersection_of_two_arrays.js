var intersect = function(nums1, nums2) {
    const count = {};
    
    for (let i = 0; i < nums1.length; i++) {
        const curr = nums1[i];
        if (count[curr] == null) {
            count[curr] = 1;
        } else {
            count[curr]++;
        }
    }
    
    const result = [];
  
    for (let i = 0; i < nums2.length; i++) {
        const curr = nums2[i];
        if (count[curr] > 0) {
            result.push(curr);
            count[curr]--;
        }
    }
    
    return result;
  };