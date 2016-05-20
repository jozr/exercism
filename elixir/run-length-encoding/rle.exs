defmodule RunLengthEncoder do
  def encode("") do
    ""
  end

  def encode(string) do
    list = String.split(string, "")
    unique_list = Enum.dedup(list)

    something = Enum.reduce(
      unique_list,
      [],
      fn char, acc ->
        list = List.last(acc) || list
        acc ++ ["#{count(list, char)}#{char}", Enum.drop(list, count(list, char))]
      end
    )
    Enum.take_every(something, 2)
    |> List.delete("1")
    |> Enum.join("")
  end

  def count(list, char) do
    Enum.reduce_while(
      list, 0,
      fn i, acc ->
        if i == char, do: {:cont, acc + 1}, else: {:halt, acc}
      end
    )
  end
end
