const {
    getMean,
    getMedian,
    getMode,
  } = require("./calculations");
  
  
  describe("get the Mean", function () {
    it("calculates the mean of an array", function () { 
      expect(getMean([1,2,3])).toEqual(2)
    })
  })
  
  
  describe("get the Median", function(){
    it("Calculates the median of an array with even numbers", function(){ 
      expect(getMedian([1, 2, 3, 4])).toEqual(2.5)
    })
    it("Calculates the median of an array with odd numbers in it", function () { 
      expect(getMedian([1, 3, 4])).toEqual(3)
    })
  })
  
  describe("get the Mode", function () {
    it("calculates the mode of an array with two numbers in the mode", function () { 
      expect(getMode([2,3,4,5,5,5,4,4])).toEqual([4,5])
    })
  })
  
  describe("get the Mode", function () {
    it("calculates the mode of an array", function () { 
      expect(getMode([2,3,4,5,4,4])).toEqual([4])
    })
  })