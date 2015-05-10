class Hamming
  def self.compute(strand1, strand2)
    arr1 = strand1.split('')
    arr2 = strand2.split('')

    count = 0
    arr1.zip(arr2).each do |arr1, arr2|
      count += 1 if arr1 != arr2
    end
    count
  end
end
