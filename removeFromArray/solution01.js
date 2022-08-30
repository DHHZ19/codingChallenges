Array.prototype.remove_ = function (integer_list, values_list) {
  for (let i = 0; i < values_list.length; i++) {
    while (integer_list.includes(values_list[i])) {
      integer_list.splice(integer_list.indexOf(values_list[i]), 1);
    }
  }
  return integer_list;
};
