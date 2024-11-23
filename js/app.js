<script>
  let birthDate = new Date("1999/04/26");

  function getAge(date) {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }
  return age;
}

  $: age = getAge(birthDate);
</script >