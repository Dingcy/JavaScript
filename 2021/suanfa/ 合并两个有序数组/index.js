/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
 * 输出：[1,2,2,3,5,6]
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1,j = n -1,k = m+n-1;
    while (i>= 0 && j>=0) {
        if(nums1[i] >= nums2[j]){
            nums1[k] = nums1[i];
            i--;
            k--;
        }else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }
    }

    while (k>=0 && j>=0) {
       nums1[k] = nums2[j];
       j--;
       k-- 
    }
    while (k>=0 && i>=0) {
        nums1[k] = nums1[i];
        i--;
        k-- 
     }

    return nums1
};

console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))
console.log(merge([1],1,[],0))