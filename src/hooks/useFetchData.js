import { useEffect, useState } from "react";

export function useFetchData({ fetcher, initialData }) {

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(initialData)
    const [error, setError] = useState(null);
    function refetch() {
        setLoading(true);
        fetcher()
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }

    useEffect(() => {
        refetch();
    }, []);

    return { data, error, loading, refetch };
}