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
  image?: string;
}> = [
  {
    id: 1,
    title: "Итоги жеребьёвки 1/8 AEL Without",
    date: "10 января 2026",
    category: "Турниры",
    content: "Турнир от AEL стартует уже в субботу! Жеребьёвка прошла, и определились все пары 1/8 финала:\n\n• Sigma United — Lynx Team\n• Vortex Team — Flowers Future\n• Willow Team — Team Montex\n• Longer Team — Kos Team\n• Vortex Academy — Monollix\n• Willow Academy — AuriX\n• Vortex-2 — Xenox Team\n• Longer Team-2 — Team Elephants Junior\n\nЖелаем удачи всем командам!",
    icon: "Trophy",
    image: "https://cdn.poehali.dev/files/photo_2026-01-10_01-53-31.jpg"
  }
];

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

        <div className="max-w-4xl mx-auto space-y-6">
          {newsData.length === 0 ? (
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
          ) : (
            newsData.map((news) => (
              <Card key={news.id} className="bg-gradient-to-br from-card to-black border-border overflow-hidden hover:border-primary transition-colors">
                {news.image && (
                  <div className="w-full h-64 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className={getCategoryColor(news.category)}>
                      {news.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      {news.date}
                    </div>
                  </div>
                  <h2 className="font-heading text-3xl font-bold text-white mb-4">
                    {news.title}
                  </h2>
                  <p className="text-muted-foreground whitespace-pre-line">
                    {news.content}
                  </p>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default News;