import { supabase } from "../utils/supabase";


const useFetch = () => {
  export const getStaticProps = async () => {
    const { data: blogPost } = await supabase.from("BlogPosts").select("*");
    return {
      props: {
        blogPost
      }
    };
  };
};
export default useFetch;





