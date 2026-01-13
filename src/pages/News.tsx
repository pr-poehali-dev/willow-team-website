import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const newsData: Array<{
  id: number;
  title: string;
  date: string;
  category: string;
  content: string;
  icon: string;
}> = [];

const News = () => {
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      "Состав": "bg-blue-950 text-blue-400 border-blue-800",
      "Турниры": "bg-green-950 text-green-400 border-green-800",
      "Команда": "bg-purple-950 text-purple-400 border-purple-800",
      "Академия": "bg-yellow-950 text-yellow-400 border-yellow-800",
      "Достижения": "bg-red-950 text-red-400 border-red-800",
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="font-heading text-6xl font-black text-white mb-4">
            НОВОСТИ
          </h1>
          <p className="text-xl text-muted-foreground">
            Последние обновления и события из жизни Willow Team
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-card to-black border-border p-12 text-center">
            <Icon name="Newspaper" size={64} className="text-muted-foreground mx-auto mb-6 opacity-50" />
            <h2 className="font-heading text-3xl font-bold text-white mb-4">
              Новостей пока нет
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Мы только начинаем свой путь в киберспорте. Скоро здесь появятся первые новости о наших турнирах, составе и достижениях.
            </p>
            <div className="flex justify-center gap-4">
              <Icon name="Bell" size={20} className="text-primary" />
              <p className="text-muted-foreground">
                Следите за нашими социальными сетями, чтобы не пропустить обновления
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default News;